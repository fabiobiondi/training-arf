import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlConfig } from '../model/form-control-configuration';

@Component({
  selector: 'fb-form-select',
  template: `
    <div class="form-group">
      <label>{{ config.label }}</label>
      <select class="form-control" [formControl]="formControl">
        <option [value]="''">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.data" [value]="option">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class FbFormSelectComponent {
  @Input() config: FormControlConfig;
  @Input() formControl: FormControl;
}
