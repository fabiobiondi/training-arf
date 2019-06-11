import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-step-2',
  template: `
    <div [formGroup]="group">
      <div [formGroup]="subGroup"
           *ngIf="group.get('step2') as subGroup">

        <h4>
          <i class="fa fa-check" *ngIf="subGroup.valid" style="color: green"></i>
          Step2: Car Details
        </h4>
        
        <div class="form-group">
          <input type="text"
                 formControlName="kw"
                 class="form-control"
                 placeholder="Kw *"
                 [ngClass]="{'is-invalid': subGroup?.controls['kw']?.invalid}"
          >
        </div>

        <div class="form-group">
          <input type="text"
                 formControlName="km"
                 class="form-control"
                 placeholder="Km *"
                 [ngClass]="{'is-invalid': subGroup?.controls['km']?.invalid}"
          >
        </div>
      </div>
    </div>
  `
})
export class Step2Component implements OnInit {
  @Input() group: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.group.addControl('step2',  this.fb.group({
      kw: [null, Validators.required],
      km: [null, Validators.required],
    }));
  }
}
