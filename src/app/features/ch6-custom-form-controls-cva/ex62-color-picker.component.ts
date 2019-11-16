import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
} from '@angular/forms';

@Component({
  selector: 'fb-color-picker-validator',
  template: `
    <form [formGroup]="form" (submit)="save()">

      <div class="form-group">
        <input class="form-control form-control-lg"
               type="text"
               formControlName="name"
               placeholder="Your name (required)"
        >
      </div>

      <div class="form-group">
        <div class="text-muted">Choose background color:</div>
        <fb-color-picker [colors]="COLORS" formControlName="background"></fb-color-picker>
      </div>

      <div class="form-group">
        <div class="text-muted">Choose foreground color (required):</div>
        <fb-color-picker [colors]="COLORS" formControlName="foreground"></fb-color-picker>
      </div>


      <div class="form-group">
        <div class="text-muted">Choose foreground color (required):</div>
        <fb-color-picker [colors]="COLORS" formControlName="anotherColor"></fb-color-picker>
      </div>

      <button class="btn btn-outline-primary" [disabled]="form.invalid"> CONFIRM </button>
      <hr>
      <pre>Valid: {{form.valid}}</pre>
      <pre>Touched: {{form.touched}}</pre>
      <pre>Form value: {{form.value | json}}</pre>
      <pre>Foreground Errors: {{ this.form.get('foreground').errors | json}}</pre>

    </form>
  `,
})
export class Ex62ColorPickerComponent implements OnInit {
  form: FormGroup;
  COLORS = ['#F44336', '#90CAF9', '#FFCDD2', '#69F0AE', '#AED581', '#FFE082'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      background: ['#90CAF9'],
      foreground: [null, Validators.required],
      anotherColor: [null, Validators.required],
    });

    this.form.get('anotherColor').disable();
  }

  save() {
    alert(JSON.stringify(this.form.value));
  }
}
