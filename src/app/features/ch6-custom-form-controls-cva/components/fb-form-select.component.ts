import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fb-form-select',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FbFormSelectComponent), multi: true },
  ],
  template: `
    <div class="form-group">
      <label>{{ label }}</label>
      <select 
        class="form-control" 
        [value]="defaultValue"
        (input)="onChangedHandler($event)"
      >
        <option [value]="''">{{ placeholder }}</option>
        <option *ngFor="let option of options" [value]="option">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class FbFormSelectComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() defaultValue: string;
  @Input() placeholder: string;
  @Input() options: string[];
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
    this.value = (event.target as HTMLSelectElement).value;
    this.onChanged( this.value );
  }

}
