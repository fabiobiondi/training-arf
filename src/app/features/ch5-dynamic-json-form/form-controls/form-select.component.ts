import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlComponent, ControlConfiguration } from '../models/input-config.interface';

@Component({
  selector: 'fb-form-select',
  template: `
    <div [formGroup]="group" class="form-group" *ngIf="group">
      <label>{{ config.label }}</label>
      <select class="form-control" 
        [formControlName]="config.name" 
      >
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.data" [value]="option">
          {{ option }}
        </option>
      </select>
    </div>
  `,
})
export class FormSelectComponent implements FormControlComponent {
  @Input() config: ControlConfiguration;
  @Input() group: FormGroup;
}
