import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlConfig } from './model/form-control-configuration';
import { MY_JSON } from './mock/myjson';

@Component({
  selector: 'fb-ex51',
  template: `

    <h2>DYNAMIC FORM</h2>

    <ng-container
      fbDynamicControl
      #f="form"
      [json]="json"
    ></ng-container>

    <button
      type="submit"
      class="btn btn-primary"
      (click)="handleSubmit(f.form.value)"
      [disabled]="f.form.invalid">Save</button>


    <pre>Value: {{f.form.value | json}}</pre>

  `
})
export class Ex52DynamicFormsLoaderCvaComponent {
  form: FormGroup;
  json: FormControlConfig[] = MY_JSON;

  handleSubmit(formData: any) {
    alert(JSON.stringify(formData));
  }
}
