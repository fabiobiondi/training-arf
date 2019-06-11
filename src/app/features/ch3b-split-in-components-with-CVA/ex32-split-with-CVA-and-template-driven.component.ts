import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fb-ex32-split-in-components-with-tpl',
  template: `
    <div class="alert alert-danger" *ngIf="f.invalid">
      all fields are required
    </div>      
    
    <form #f="ngForm" (submit)="save(f)">

      <input 
        type="text"
        [ngModel]
        name="username"
        required
        class="form-control" placeholder="username * "
      >
      <hr>
      <fb-user-form [ngModel] name="user"></fb-user-form>
      <hr>
      
      Vote 1: <fb-form-stars [ngModel] name="stars" #starInput="ngModel"></fb-form-stars>
      Vote 2: <fb-form-stars [ngModel]="1" name="stars2" #starInput="ngModel"></fb-form-stars>

      <button
        class="btn btn-outline-success"
        type="submit" [disabled]="f.invalid">Submit</button>
    </form>

    <hr>
<pre>
Form Dirty: {{f.dirty }}
Form Valid: {{f.valid }}
Form Touched: {{f.touched }}
Form Value: {{f.value | json}}
Form Errors: {{f.errors | json}}
Star Input Errors: {{starInput.errors | json}}
</pre>
    
  `,
})
export class Ex32SplitWithCVAAndTemplateDrivenComponent {
  save(form: NgForm) {
    alert(JSON.stringify(form.value));
  }
}
