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
  selector: 'fb-user-form',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UserFormComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => UserFormComponent), multi: true }
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
               formControlName="name"
               class="form-control"
               (blur)="onTouched()"
               (input)="onChangedHandler()"
               placeholder="Your Name *"
               [ngClass]="{'is-invalid': form.get('name').invalid}"
        >
      </div>

      <div class="form-group">
        <input type="text"
               formControlName="surname"
               (blur)="onTouched()"
               (input)="onChangedHandler()"
               class="form-control"
               placeholder="Surname *"
               [ngClass]="{'is-invalid': form.get('surname').invalid}"
        >
      </div>
    </div>
  `
})
export class UserFormComponent implements ControlValueAccessor, Validator {

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    surname: new FormControl(null, [Validators.required])
  });

  onTouched: () => void;
  onChanged: (val) => void;

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  /**
   * Invoked each time this form is updated from parent
   * (i.e. with patchValue, setValue)
   */
  writeValue(val: any): void {
    if (val) {
      // this.form.setValue(val, { emitEvent: false });
      this.form.setValue(val);
    }
  }

  /**
   * Invoked by input fields onChange event
   * Update the form model when it changes,
   * so parent form receives new value, dirty or invalid state
   */
  onChangedHandler() {
    this.onChanged( this.form.value );
  }

  /**
   * Invoked each time form fields are updated
   */
  validate(c: AbstractControl): ValidationErrors | null {
    return this.form.invalid ? { missingFields: true } : null;
  }

}
