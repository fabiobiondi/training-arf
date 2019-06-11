import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
} from '@angular/forms';
import { UserValidator } from './validators/user-async.validator';

@Component({
  selector: 'fb-async-validator',
  template: `

    <h5>Find a free username</h5>

    <form [formGroup]="form" (submit)="save()" class="form-group form-inline">
      <input class="form-control"
        type="text"
        formControlName="name"
        placeholder="Search username"
      >

      <i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw" *ngIf="form.get('name').pending"></i>

      <button 
        class="btn btn-primary"
        *ngIf="form.valid"
        [ngClass]="{'btn-success': form.valid, 'btn-warning': form.pending}"
        [disabled]="form.invalid || form.pending"
      > CONFIRM </button>
      

    </form>
    <p class="text-danger" *ngIf="!!form.get('name').errors?.minlength">
      Too short. Min 3 characters
    </p>

    <p class="text-danger" *ngIf="!!form.get('name').errors?.notAvailable">
      Username Not available
    </p>

    <hr>
    <small>NOTE: Bret, Samantha, Karianne are already taken. Try them</small>

  `,
})
export class Ex41AsyncValidatorsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userValidator: UserValidator
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [
        null,
        // sync built-in validators
        Validators.compose(
          [ Validators.required, Validators.minLength(2) ],
        ),
        // custom async validator
        this.userValidator.uniqueName()
      ],
    });
  }

  save() {
    alert(JSON.stringify(this.form.value));
  }
}
