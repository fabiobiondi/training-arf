import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex30-split-in-components',
  template: `

    <form [formGroup]="form" (submit)="add(form)">
      <div class="form-group">
        <input type="text"
               formControlName="name"
               placeholder="Your Name (min 3 chars)*"
               class="form-control"
               [ngClass]="{'is-invalid': form.controls['name'].invalid}"
        >
      </div>
      
      <fb-step-1 [group]="form"></fb-step-1>
      <fb-step-2 [group]="form"></fb-step-2>

      <button 
        type="submit" class="btn btn-primary"
        [disabled]="form.invalid"
      > Submit </button>
    </form>
  `
})
export class Ex30SplitComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [null, [
        Validators.required, Validators.minLength(3)]
      ]
    });
  }

  add(form: FormGroup) {
    alert(JSON.stringify(form.value));
  }
}
