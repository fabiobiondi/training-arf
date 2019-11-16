import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'fb-color-picker',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: ColorPickerComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: ColorPickerComponent, multi: true },
  ],
  template: `

    <div [style.opacity]="opacity">
      <span *ngFor="let color of colors"
            class="color-cell"
            [style.backgroundColor]="color"
            [style.borderWidth.px]="value === color ? 5 : 1"
            (click)="changeColor(color)"
      >
      </span>
      <i class="fa fa-times fa-2x" (click)="changeColor(null)"></i>
    </div>
  `,
  styles: [`
    .color-cell {
      display: inline-block;
      width: 50px; height: 30px;
      border: 1px solid #665;
      margin-right: 2px;
    }
  `]
})
export class ColorPickerComponent implements ControlValueAccessor {
  @Input() colors = [];
  value: string;
  opacity = 1;

  onTouched: () => void;
  onChanged: any = () => {};

  // required by ControlValueAccessor
  registerOnChange(fn) { this.onChanged  = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }

  // optional
  setDisabledState(isDisabled: boolean): void {
    this.opacity = isDisabled ? 0.3 : 1;
  }


  /**
   * Set initial component value
   */
  writeValue(color) {
    this.value = color;
  }

  /*
   * Change the color from UI
   */
  changeColor(color: string) {
    this.value = color;
    this.onChanged (color);
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.value ? null : { missing: true};
  }
}
