import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlConfig } from '../model/form-control-configuration';

@Component({
  selector: 'fb-form-input',
  template: `
    <div class="form-group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        class="form-control"
        [formControl]="formControl"
        [attr.placeholder]="config.placeholder"
         />
    </div>
  `,
})
export class FbFormInputComponent  {
  @Input() config: FormControlConfig;
  @Input() formControl: FormControl;
}
