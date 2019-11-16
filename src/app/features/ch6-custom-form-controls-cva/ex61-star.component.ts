import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'fb-star-custom-control',
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

      <span [style.color]="form.get('vote1').errors?.empty ? 'red' : null">Vote 1:</span>
      <fb-form-stars formControlName="vote1"></fb-form-stars>

      <span [style.color]="form.get('vote2').errors?.empty ? 'red' : null">Vote 2:</span>
      <fb-form-stars formControlName="vote2"></fb-form-stars>

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
Form Errors: {{form.errors | json}}
Vote 1: {{form.get('vote1').errors | json}}
Vote 2: {{form.get('vote2').errors | json}}
</pre>
  `,
})
export class Ex61StarComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: [null, Validators.required ],
      vote1: [null],
      vote2: [2]
    });
  }


  save() {
    alert(JSON.stringify(this.form.value));
  }
}
