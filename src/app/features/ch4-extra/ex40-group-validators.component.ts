import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex20-nested-groups',
  template: `
    <form [formGroup]="loginForm" (submit)="register()">
      <div class="form-group">
        <input 
          type="text" formControlName="username" class="form-control" 
          placeholder="Your username. Min 4 chars"
          [ngClass]="{'is-invalid': loginForm.get('username').invalid}"
        >
      </div>

      <div formGroupName="passwords" class="form-group form-inline">

        <input type="text" formControlName="password1" class="form-control mr-2" 
               placeholder="password"
               [ngClass]="{'is-invalid': loginForm.get('passwords').invalid}"
        >
        <input type="text" formControlName="password2" class="form-control mr-2" 
               placeholder="confirm password"
               [ngClass]="{'is-invalid': loginForm.get('passwords').invalid}"
        >

        <i class="fa fa-check fa-2x" *ngIf="loginForm.get('passwords').valid"></i>

        <br>
        <div>
          <small *ngIf="!!loginForm.get('passwords').get('password1').errors?.minlength">
            Passwords should have at least 3 characters <br>
          </small>
          <small *ngIf="!!loginForm.get('passwords').get('password2').errors?.noMatch">
            Passwords does not match!
          </small>
        </div>

      </div>

   
      <button class="btn btn-success"
              [disabled]="loginForm.invalid">REGISTER</button>
    </form>
  `,
})
export class Ex40GroupValidatorsComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      passwords: fb.group(
        {
          password1: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
          password2: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
        },
        { validator: passwordMatch('password1', 'password2') }
      )
    });

  }

  register() {
    window.alert('register ' + this.loginForm.get('username').value);
  }

}

// GROUP VALIDATOR

export function passwordMatch(formControlName1: string, formControlName2: string) {
  return (group) => {
    if (group.get(formControlName1).value !== group.get(formControlName2).value) {
      group.get(formControlName2).setErrors({noMatch: true});
    } else {
      group.get(formControlName2).setErrors(null);
    }
  };
}
