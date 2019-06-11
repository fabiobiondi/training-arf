import { Component, OnInit } from '@angular/core';
import { LOAD_FORM_CONFIGURATION } from './mock-json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlData } from './models/input-config.interface';

@Component({
  selector: 'fb-dynamic-form-view-usage',
  template: `
    <h2>MY DYNAMIC FORM</h2>

    <form
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="handleSubmit()"
    >
      <ng-container
        *ngFor="let data of config;"
        fbDynamicControl
        [data]="data"
        [group]="form">
      </ng-container>
    </form>

    <pre>Valid: {{ form.valid }}</pre>
    <pre>Form Value: {{ form.value | json }}</pre>

  `
})
export class Ex50DynamicFormJsonComponent implements OnInit {
  form: FormGroup;
  config: ControlData[] = LOAD_FORM_CONFIGURATION;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(this.formCreation());
  }

  formCreation() {
    return this.config.reduce((acc, curr) => {
      acc[curr.name] = [
        curr.value || '',
        Validators.compose([
          curr.required ? Validators.required : null,
          curr.minlength ? Validators.minLength(curr.minlength) : null,
          curr.maxlength ? Validators.maxLength(curr.maxlength) : null,
        ])
      ];
      return acc;
    }, {});
  }

  handleSubmit() {
    const { submit, ...formData } = this.form.value;
    alert(JSON.stringify(formData));
  }
}
