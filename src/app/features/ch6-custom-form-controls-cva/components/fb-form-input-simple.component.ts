import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'fb-form-input-simple',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FbFormInputSimpleComponent), multi: true },
  ],
  template: `
    <div class="form-group">
      <small>{{ label }}</small>
      <input
        type="text"
        class="form-control"
        [attr.placeholder]="placeholder"
        (input)="onChangedHandler($event)"
        (blur)="onTouched()"
        [value]="value"
      />
    </div>
    
  `,
})
export class FbFormInputSimpleComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;
  value: string;
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
