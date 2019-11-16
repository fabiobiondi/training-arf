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

      <br>
      <fb-user-form formControlName="userForm"></fb-user-form>

      <hr>
      <input type="checkbox" formControlName="isCompany"> You are a Company
      <fb-company-form formControlName="companyForm"></fb-company-form>

      <hr>
      Your Rate* :
      <fb-form-stars formControlName="stars"></fb-form-stars>

      <hr>

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
<hr>
User Form Errors: {{form.get('userForm').errors | json}}
Company Form Errors: {{form.get('companyForm').errors | json}}
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
      companyForm: new FormControl(/*{ companyName: '', vat: 12345}*/),
      userForm: [null],
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
    this.form.setValue({
      yourname: 'Mario Rossi',
      isCompany: true,
      companyForm: {
        companyName: 'Angular',
        vat: '6789',
      },
      userForm: {
        name: 'Mario',
        surname: 'Rossi',
      },
      stars: 2
    });
  }
}
