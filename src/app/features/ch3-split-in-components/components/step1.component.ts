import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-step-1',
  template: `
    <div [formGroup]="subGroup">
      <h4>
        <i class="fa fa-check" *ngIf="subGroup.valid" style="color: green"></i>
        Step1: Car Info
      </h4>
      
      <div class="form-group">
        <input type="text"
               formControlName="brand"
               class="form-control"
               placeholder="Brand *"
               [ngClass]="{'is-invalid': subGroup?.get('brand')?.invalid}"
        >
      </div>

      <div class="form-group">
        <input type="text"
               formControlName="model"
               class="form-control"
               placeholder="Model *"
               [ngClass]="{'is-invalid': subGroup?.get('model')?.invalid}"
        >
      </div>
    </div>
  `
})
export class Step1Component implements OnInit {
  @Input() group: FormGroup;
  subGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subGroup = this.fb.group({
      brand: [null, Validators.required],
      model: [null, Validators.required],
    });

    this.group.addControl('step1', this.subGroup);
  }
}
