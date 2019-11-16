import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlConfig } from './model/form-control-configuration';
import { MY_JSON } from './mock/myjson';

@Component({
  selector: 'fb-ex51',
  template: `

    <h2>MY DYNAMIC FORM (ngSwitch)</h2>

    <form
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="handleSubmit()"
    >
      <div
        *ngFor="let config of json"
        [ngSwitch]="config.type">

        <div *ngSwitchCase="'input'">
          <fb-form-input formControlName="name" [config]="config"></fb-form-input>
        </div>

        <div *ngSwitchCase="'select'">
          <fb-form-select formControlName="food" [config]="config"></fb-form-select>
        </div>

      </div>

      <button
        type="submit"
        class="btn btn-primary"
        [disabled]="form.invalid">Save</button>

    </form>

    <pre>valid: {{form.valid}}</pre>
    <pre>dirty: {{form.dirty}}</pre>
    <pre>touched: {{form.touched}}</pre>
    <pre>Form Value: {{ form.value | json }}</pre>
  `
})
export class Ex51DynamicFormsNgSwitchCvaComponent implements OnInit {
  form: FormGroup;
  json: FormControlConfig[] = MY_JSON;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(this.formCreation());
  }

  formCreation() {
    return this.json.reduce((acc, curr) => {
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
