import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl, ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors, Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'fb-company-form',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CompanyFormComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CompanyFormComponent), multi: true }
  ],
  template: `
    <div
      [formGroup]="form"
      class="alert"
      [ngClass]="{
          'alert-success': form.valid, 
          'alert-danger': form.invalid 
        }"

    >
      <div class="form-group">
        <input type="text"
               formControlName="companyName"
               class="form-control"
               (blur)="onTouched()"
               placeholder="Company Name *"
               [ngClass]="{'is-invalid': form.get('companyName').invalid}"
        >
      </div>

      <div class="form-group">
        <input type="text"
               formControlName="vat"
               (blur)="onTouched()"
               class="form-control"
               placeholder="VAT *"
               [ngClass]="{'is-invalid': form.get('vat').invalid}"
        >
      </div>
    </div>
  `
})
export class CompanyFormComponent implements ControlValueAccessor, Validator {

  form: FormGroup = new FormGroup({
    companyName: new FormControl(null, [Validators.required]),
    vat: new FormControl(null, [Validators.required])
  });

  onTouched: () => void;

  /**
   * Invoked each time this form is updated from parent
   * (i.e. with patchValue, setValue)
   */
  writeValue(val: any): void {
    console.log(val)
    if (val) {
      // this.form.setValue(val, { emitEvent: false });
      this.form.setValue(val);
    }
  }

  /**
   * Required to enable form validation
   * Invoked Once when component is created
   * Without this, setValue, patchValue and similar methods from parent don't work
   * And you don't update the form model when it changes, so parent form doesn't receive any new value, dirty or invalid state
   */

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
    // alternative
    /*this.form.get('companyName').valueChanges.subscribe(fn);
    this.form.get('vat').valueChanges.subscribe(fn);*/
  }

  /**
   * Disable / Enable fonts
   * Invoked each time form is disabled/enabled from parent form group
   */
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  /**
   * Invoked each time form fields are updated
   */
  validate(c: AbstractControl): ValidationErrors | null {
    return this.form.invalid ? { missingFields: true } : null;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
