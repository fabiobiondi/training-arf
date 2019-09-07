import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex31-split-in-components',
  template: `
    <div 
      class="alert alert-danger"
      *ngIf="form.invalid && form.dirty"
    >all fields are required</div>      
    
    <form [formGroup]="form" (submit)="save(form)">

      <input type="text" formControlName="yourname" class="form-control" placeholder="username * ">
      <hr>
      <fb-user-form formControlName="userForm"></fb-user-form>
      <hr>
      Your Rate (must be > 1)* : 
      <fb-form-stars formControlName="stars"></fb-form-stars>

      <hr>
      <input type="checkbox" formControlName="isCompany"> You are a Company
      <fb-company-form formControlName="companyForm"></fb-company-form>

      <button
        class="btn btn-primary"
        type="submit" [disabled]="form.invalid">Submit</button>
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
export class Ex31SplitWithCVAComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, cd: ChangeDetectorRef) {
    this.form = fb.group({
      yourname: ['', Validators.required],
      isCompany: [true],
      companyForm: new FormControl(/*{ companyName: '', vat: 12345}*/),
      userForm: null,
      stars: null
    });

    this.form.get('isCompany')
      .valueChanges
      .subscribe(value => this.enableCompany(value));

    // Update Form Data
    // (in order to test if 'writeValue' work in components)
    // setTimeout(() => this.populateForm(), 2000);
  }

  enableCompany(enable: boolean) {
    if (enable) {
      this.form.get('companyForm').enable();
    } else {
      this.form.get('companyForm').disable();
    }
  }

  save(form: FormGroup) {
    alert(JSON.stringify(form.value));
  }

  populateForm() {
    this.form.get('companyForm').setValue({
      companyName: 'Angular',
      vat: '6789',
    });

    this.form.get('userForm').setValue({
      name: 'Mario',
      surname: 'Rossi',
    });
    this.form.get('stars').setValue(2);
  }

}
