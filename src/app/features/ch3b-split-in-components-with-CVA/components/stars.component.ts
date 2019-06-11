import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'fb-form-stars',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StarsComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => StarsComponent), multi: true }
  ],
  template: `
  
    <div>
      <i
        *ngFor="let star of [null,null,null]; let i = index"
        style="cursor: pointer"
        class="fa"
        (click)="onClickStarHandler(i+1)"
        [ngClass]="{
          'fa-star': i+1 <= value,
          'fa-star-o': i+1 > value
        }"
      ></i>
    </div>
  `
})
export class StarsComponent implements ControlValueAccessor, Validator {
  value: number; // 1,2,3
  onChanged: (val) => void;
  onTouched: () => void;

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Invoked each time this form is updated from parent
   * (i.e. with patchValue, setValue)
   */
  writeValue(val: number): void {
    this.value = val;
  }

  /**
   * Invoked each time form fields are updated
   */
  validate(c) {
    return this.value > 0 ? null : { required: true };
  }

  /**
   * When a star is clicked
   */
  onClickStarHandler(value: number) {
    this.value = value;     // update UI
    this.onChanged(value);  // update Model / Dirty State
    this.onTouched();       // update Touch State
  }
}
