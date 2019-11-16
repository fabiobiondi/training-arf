import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex5-form-builder',
  template: `
    <form [formGroup]="form" (submit)="add()">
      <div class="form-group">
        <input
          class="form-control form-control-lg" type="text" formControlName="company"
          placeholder="Company Name *"
          [ngClass]="{ 'is-invalid': form.controls['company'].invalid && form.dirty}"
        >
      </div>

      <div class="form-group">
        <input
          class="form-control form-control-lg" type="text"
          formControlName="vatNumber"
          placeholder="Your VAT number (no symbols - alphanumeric)*"
          [ngClass]="{'is-invalid': form.get('vatNumber').invalid && form.dirty}"
        >

        <!--<pre>{{form.get('vatNumber').errors | json}}</pre>-->
        
        <!--ERRORS-->
        <small class="form-text text-muted">
          <small class="form-text text-muted">Example: 01116230317</small>
          <div *ngIf="form.controls['vatNumber'].errors?.diff as diff">
            Format error: {{diff}} chars
          </div>
          <div *ngIf="!!form.get('vatNumber').errors?.alphaNumeric">
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
export class Ex5CustomValidatorParamsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      company: [null, Validators.required],
      vatNumber: ['', Validators.compose([Validators.required, c => vatCFValidator(c, 11)])]
    });
  }

  add() {
    alert(JSON.stringify(this.form.value));
  }
}


// VALIDATOR

const ALPHA_NUMERIC_REGEX = /^([A-Za-z]|[0-9]|_)+$/;

export function vatCFValidator(c: AbstractControl, requiredNumber: number): { [s: string]: boolean | number | string} {

  // check alphanumeric
  if (c.value && !c.value.match(ALPHA_NUMERIC_REGEX)) {
    return { alphaNumeric: true };
  }

  // check missing or extra charatecters
  const diff =  c.value.length - requiredNumber;
  if (c.value && diff) {
    return {
      diff: diff > 0 ? `+${diff}` : diff,
      required: requiredNumber
    };
  }
}
