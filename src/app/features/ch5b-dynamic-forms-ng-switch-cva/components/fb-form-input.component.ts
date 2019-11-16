import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlConfig } from '../model/form-control-configuration';

@Component({
  selector: 'fb-form-input',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FbFormInputComponent), multi: true },
  ],
  template: `
    <div class="form-group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        class="form-control"
        [attr.placeholder]="config.placeholder"
        (input)="onChangedHandler($event)"
        (blur)="onTouched()"
        [value]="value"
         />
    </div>
  `,
})
export class FbFormInputComponent implements ControlValueAccessor {
  @Input() config: FormControlConfig;
  value: string

  onChanged: (val) => void;
  onTouched: () => void;

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(value: string): void {
    this.value = value;
  }

  onChangedHandler(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.onChanged( this.value );
  }
}
