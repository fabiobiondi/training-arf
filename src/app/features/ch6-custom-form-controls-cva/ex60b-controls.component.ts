import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'fb-custom-controls',
  template: `
    <div class="alert alert-danger" *ngIf="form.invalid && form.dirty">
      all fields are required
    </div>

    <form [formGroup]="form" (submit)="save()">

      <input
        type="text"
        formControlName="username"
        class="form-control" placeholder="username * "
        [ngClass]="{'is-invalid': form.get('username').invalid}"
      >

      <fb-form-input 
        formControlName="city"
        placeholder="Your city"
        label="City (alphanumeric only):"
        [alphaNumericOnly]="true"
      ></fb-form-input>


      <fb-form-input
        formControlName="email"
        placeholder="Your email address"
        label="Email:"
        [alphaNumericOnly]="false"
      ></fb-form-input>
      
      <button
        class="btn btn-success"
        type="submit" [disabled]="form.invalid">Submit</button>
    </form>

    <hr>

<pre>
Form Dirty: {{form.dirty }}
Form Valid: {{form.valid }}
Form Touched: {{form.touched }}
Form Value: {{form.value | json}}
City Errors: {{form.get('city').errors | json}}
Email Errors: {{form.get('email').errors | json}}
</pre>
  `,
})
export class Ex60bControlsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: [null, Validators.required ],
      city: [null, [Validators.required, Validators.minLength(3) ]],
      email: [null, [Validators.required, Validators.minLength(3), emailValidator]],
    });
  }


  save() {
    alert(JSON.stringify(this.form.value));
  }
}



// VALIDATOR

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function emailValidator(c: FormControl): { [s: string]: boolean } {
  if (c.value) {
    if (c.value.indexOf('@') === -1 ) {
      return { 'missing @': true };
    }
    if (!c.value.match(EMAIL_REGEX)) {
      return { invalidEmail: true };
    }
  }
}
