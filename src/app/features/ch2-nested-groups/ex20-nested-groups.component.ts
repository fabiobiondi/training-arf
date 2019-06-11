import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex10-nested-groups',
  template: `

    <form [formGroup]="form" (submit)="add(form)">

      <!--username-->
      <div class="form-group">
        <input type="text"
               formControlName="name"
               placeholder="Your Name (min 3 chars)*"
               class="form-control"
               [ngClass]="{'is-invalid': form.controls['name'].invalid}"
        >
      </div>

      <!--step1 / car nested group-->
      <div formGroupName="step1" *ngIf="form.get('step1') as step1">

        <h4>
          <i class="fa fa-check" *ngIf="step1.valid" style="color: green"></i>
          Your car
        </h4>
        <div class="form-group">
          <input type="text"
                 formControlName="brand"
                 class="form-control"
                 placeholder="Car Brand *"
                 [ngClass]="{'is-invalid': step1.controls['brand'].invalid}"
          >
        </div>

        <div class="form-group">
          <input type="text"
                 formControlName="model"
                 class="form-control"
                 placeholder="Car Model *"
                 [ngClass]="{'is-invalid': step1.controls['model'].invalid}"
          >
        </div>
      </div>

      <button 
        type="submit" class="btn btn-primary"
        [disabled]="form.invalid"
      > Submit </button>
    </form>
  `
})
export class Ex20NestedGroupsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [null, [
        Validators.required, Validators.minLength(3)]
      ],
      step1: fb.group({
        brand: [null, Validators.required],
        model: [null, Validators.required],
      }),
      /*
      step2: fb.group({
        kw: [null, [Validators.required, Validators.min(0), Validators.max(700)]],
        year: [2017, [Validators.required, Validators.min(1970), Validators.max(2018)]],
      }),
      */
    });
  }

  add(form: FormGroup) {
    alert(JSON.stringify(form.value));
  }
}
