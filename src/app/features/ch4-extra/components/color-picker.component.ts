import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'fb-color-picker',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: ColorPickerInputComponent, multi: true },
  ],
  template: `
      <span *ngFor="let color of colors"
        class="color-cell"
        [style.backgroundColor]="color"
        [style.borderWidth.px]="value === color ? 5 : 1"
        (click)="changeColor(color)">
      </span>
      <i class="fa fa-times fa-2x" (click)="changeColor(null)"></i>
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
export class ColorPickerInputComponent implements ControlValueAccessor {
  @Input() colors = [];
  value: string;

  onTouched: () => void;
  onChanged: any = () => {};

  // required by ControlValueAccessor
  registerOnChange(fn) { this.onChanged  = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }

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

}
