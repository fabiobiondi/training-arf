import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex33-multistep-forms-with-cva',
  template: `
    <form [formGroup]="form">

      <div [ngSwitch]="step">
        <fb-multi-step
          *ngSwitchCase="0"
          [title]="'STEP 1: Username'"
          [showNext]="form.get('yourname').valid"
          (gotoNextStep)="step = 1"
        >
          <input type="text" formControlName="yourname" class="form-control" placeholder="username * ">
        </fb-multi-step>

        <fb-multi-step
          *ngSwitchCase="1"
          [title]="'STEP 2: User Form'"
          [showNext]="form.get('userForm').valid"
          (gotoNextStep)="step = 2"
        >
          <fb-user-form formControlName="userForm"></fb-user-form>
        </fb-multi-step>

        <fb-multi-step
          *ngSwitchCase="2"
          [title]="'STEP 2: Company Form'"
          [showNext]="form.get('companyForm').valid"
          (gotoNextStep)="step = 3"
        >
          <fb-company-form formControlName="companyForm"></fb-company-form>
        </fb-multi-step>

        <fb-multi-step
          *ngSwitchCase="3"
          [title]="'STEP 3: Rate the event'"
          [showSubmit]="form.get('stars').valid"
          (submitForm)="save(form)"
        >
          <fb-form-stars formControlName="stars"></fb-form-stars>
        </fb-multi-step>
      </div>
    </form>


    <hr>
<pre>
Form Dirty: {{form.dirty }}
Form Valid: {{form.valid }}
Form Touched: {{form.touched }}
Form Value: {{form.value | json}}
Form Errors: {{form.errors | json}}
User Errors: {{form.get('userForm').errors | json}}
CompanyInfo Errors: {{form.get('companyForm').errors | json}}
Star Errors: {{form.get('stars').errors | json}}
</pre>

  `,
})
export class Ex33MultistepFormsWithCVAComponent {
  form: FormGroup;
  step = 0;

  constructor(private fb: FormBuilder, cd: ChangeDetectorRef) {
    this.form = fb.group({
      yourname: [null, Validators.required],
      companyForm: [null, Validators.required],
      userForm: [null, Validators.required],
      stars: [null, Validators.required],
    });
  }

  save(form: FormGroup) {
    alert(JSON.stringify(form.value));
  }

}
