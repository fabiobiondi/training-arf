import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlComponent, ControlConfiguration } from '../models/input-config.interface';

@Component({
  selector: 'fb-form-input',
  template: `
    <div class="form-group"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        class="form-control"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name" />
    </div>
  `,
})
export class FormInputComponent implements FormControlComponent {
  @Input() group: FormGroup;
  @Input() config: ControlConfiguration;
}
