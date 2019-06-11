import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex6-form-builder',
  template: `
    <form [formGroup]="form" (submit)="add()">

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" formControlName="isCompany" id="chk">
        <label for="chk">Are you a Company?</label>
      </div>

      <div class="form-group">
        <input 
          class="form-control form-control-lg" type="text" formControlName="company"
          placeholder="Company Name *"
          [ngClass]="{ 'is-invalid': form.controls.company.invalid}"
          >
      </div>

      <div class="form-group">

        <input 
          class="form-control form-control-lg" type="text"
          formControlName="picf"
          [placeholder]="isCompany.value ? 'Your VAT number *' : 'Fiscal Code *'"
          [ngClass]="{'is-invalid': form.controls.picf.errors?.wrong }"
        >

        <!--ERRORS-->
        <small class="form-text text-muted">
          Example: {{isCompany.value ? '01116230317' : 'BNDFBA77H24A123B'}}
          <div *ngIf="form.controls['picf'].errors?.diff as diff">
            Format error: {{diff}} chars
          </div>
          <div *ngIf="!!form.controls.picf.errors?.alphaNumeric as alphaNumeric">
            Must be alphanumeric
          </div>
        </small>
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="form.invalid">
        SUBMIT
      </button>
    </form>
  `
})
export class Ex6ConditionalValidatorComponent implements OnInit {
  form: FormGroup;
  isCompany: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      isCompany: [false],
      company: [null, Validators.required],
      picf: [null]
    });
    this.isCompany = this.form.get('isCompany');
    this.setUserValidator();
  }

  setCompanyValidator() {
    this.form.get('picf').setValidators(
      Validators.compose([Validators.required, c => vatCFValidator(c, 11)])
    );
    this.form.get('company').enable();
  }

  setUserValidator() {
    this.form.get('picf').setValidators(
      Validators.compose([Validators.required, c => vatCFValidator(c, 16)])
    );
    this.form.get('company').disable();

  }

  ngOnInit() {
    this.isCompany.valueChanges.subscribe(isCompany => {
      if (isCompany) {
        this.setCompanyValidator();
      } else {
        this.setUserValidator();
      }
      this.form.get('picf').updateValueAndValidity();
    });
  }

  add() {
    alert(JSON.stringify(this.form.value));
  }
}


// VALIDATOR

const ALPHA_NUMERIC_REGEX = /^([A-Za-z]|[0-9]|_)+$/;

export function vatCFValidator(c: AbstractControl, requiredNumber: number): { [s: string]: boolean | number | string} {
  // check if available
  if (!c.value) {
    return {wrong: true};
  }

  // check alphanumeric
  if (c.value && !c.value.match(ALPHA_NUMERIC_REGEX)) {
    return {wrong: true, alphaNumeric: true  };
  }

  // check missing or extra charatecters
  const diff =  (c.value.length || 0) - requiredNumber;
  if (c.value && diff) {
    return {
      wrong: true,
      diff: diff > 0 ? `+${diff}` : `${diff}`,
      requiredLength: requiredNumber
    };
  }
}
