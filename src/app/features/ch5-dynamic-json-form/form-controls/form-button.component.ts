import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlComponent, ControlConfiguration } from '../models/input-config.interface';

@Component({
  selector: 'fb-form-button',
  template: `
    <div [formGroup]="group" class="form-group">
      <button type="submit" class="btn btn-primary"
        [disabled]="group.invalid">
        {{ config.label }}
      </button>
    </div>
  `,
})
export class FormButtonComponent implements FormControlComponent {
  group: FormGroup;
  config: ControlConfiguration;
}
