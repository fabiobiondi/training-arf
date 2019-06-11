import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex4-form-builder',
  template: `
    <form [formGroup]="form" (submit)="add(form.value)">
      <div class="form-group">
        <input 
          class="form-control form-control-lg" type="text" formControlName="company"
          placeholder="Company Name *"
          [ngClass]="{ 'is-invalid': form.controls['company'].invalid}"
          >
      </div>

      <div class="form-group">
        <input 
          class="form-control form-control-lg" type="text"
          formControlName="vatNumber"
          placeholder="Your VAT number (alphanumeric only - no symbols)*"
          [ngClass]="{'is-invalid': form.get('vatNumber').invalid }"
        >

        <!--ERRORS-->
        <small class="form-text text-muted">
          <div *ngIf="!!form.get('vatNumber').errors?.required">
            Required
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
export class Ex4FormBuilderComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      company: [null, Validators.required],
      vatNumber: ['', Validators.compose([Validators.required, vatValidator])]
    });
  }

  add() {
    alert(JSON.stringify(this.form.value));
  }
}

// VALIDATOR
export function vatValidator(c: AbstractControl): { [s: string]: boolean } {
  const ALPHA_NUMERIC_REGEX = /^([A-Za-z]|[0-9]|_)+$/;
  if (c.value && !c.value.match(ALPHA_NUMERIC_REGEX)) {
    return { alphaNumeric: true };
  }
}
