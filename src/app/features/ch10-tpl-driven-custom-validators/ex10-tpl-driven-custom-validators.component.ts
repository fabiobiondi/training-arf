import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-ch10-tpl-driven-custom-validators',
  template: `
    <form #f="ngForm" (ngSubmit)="save(f.value)">

      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fa fa-check" *ngIf="!!emailRef.valid"></i>
            <i class="fa fa-asterisk" *ngIf="!!emailRef.errors?.required"></i>
            <i class="fa fa-exclamation-circle" *ngIf="!!emailRef.errors?.invalidEmail"></i>
          </div>
        </div>
        <input
          class="form-control"
          type="text"
          [ngModel]
          name="email"
          #emailRef="ngModel"
          fbEmailValidator
          required
          placeholder="Your email address *"
        >
      </div>
      

      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fa fa-circle-o-notch fa-spin fa-fw" *ngIf="usernameRef.pending"></i>
            <i class="fa fa-check" *ngIf="usernameRef.valid"></i>
            <i class="fa fa-asterisk" *ngIf="!!usernameRef.errors?.required"></i>
            <i class="fa fa-sort-numeric-asc" *ngIf="!!usernameRef.errors?.minlength"></i>
            <i class="fa fa-exclamation-circle" *ngIf="!!usernameRef.errors?.notAvailable"></i>
          </div>
        </div>
        <input
          class="form-control"
          type="text"
          placeholder="Choose a free username *"
          [ngModel]
          #usernameRef="ngModel"
          name="username"
          required
          minlength="3"
          fbUsernameAsyncValidator>
      </div>
      <div>Try 'Bret' to test a not available username</div>

      <hr>
      
      <button class="btn btn-success" [disabled]="f.invalid || f.pending">Save</button>
    </form>
    
    <br>
    
    <pre>Form Valid: {{f.valid}}</pre>
    <pre>Form Value: {{f.value | json}}</pre>
    <pre>Email Errors: {{emailRef.errors | json}}</pre>
    <pre>Username Errors: {{usernameRef.errors| json}}</pre>
  `,
  styles: []
})
export class Ex10TplDrivenCustomValidatorsComponent {

  save(formData) {
    alert(JSON.stringify(formData))
  }

}
