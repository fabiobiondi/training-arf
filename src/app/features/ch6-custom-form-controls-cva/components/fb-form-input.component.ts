import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl
} from '@angular/forms';

const ALPHA_NUMERIC_REGEX = /^([A-Za-z]|[0-9]|_)+$/;

@Component({
  selector: 'fb-form-input',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FbFormInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => FbFormInputComponent), multi: true }
  ],
  template: `
    <div class="form-group">
      <small [style.color]="ngControl.invalid ? 'red' : null">{{ label }}</small>
      <input
        type="text"
        class="form-control"
        [attr.placeholder]="placeholder"
        (input)="onChangedHandler($event)"
        (blur)="onTouched()"
        [value]="value"
        [ngClass]="{'is-invalid': ngControl?.invalid, 'is-valid': !ngControl?.valid}"
         />
    </div>
    
  `,
})
export class FbFormInputComponent implements ControlValueAccessor, OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() alphaNumericOnly: boolean;
  value: string;
  errors: any;
  ngControl: NgControl;

  onChanged: (val) => void;
  onTouched: () => void;

  constructor(private inj: Injector) { }

  ngOnInit() {
    // get form control (useful to access validations, errors, dirty, ...)
    this.ngControl = this.inj.get(NgControl);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  validate(c) {
    if (this.alphaNumericOnly && c.value && !c.value.match(ALPHA_NUMERIC_REGEX)) {
      return {
        alphaNumeric: true
      };
    }
  }

  onChangedHandler(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.onChanged( this.value );
  }
}
