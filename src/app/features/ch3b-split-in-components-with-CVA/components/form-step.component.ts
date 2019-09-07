import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fb-multi-step',
  template: `
    <div class="card">
      <div class="card-header">{{title}}</div>

      <div class="card-body">
        <ng-content></ng-content>

        <hr>
        <div class="btn-group">
          <button
            [disabled]="!showNext"
            (click)="gotoNextStep.emit()"
            class="btn"
            [ngClass]="{
              'btn-warning': showNext,
              'btn-outline-warning': !showNext
            }"
            type="button">NEXT
          </button>

          <button
            [disabled]="!showSubmit"
            (click)="submitForm.emit()"
            class="btn"
            [ngClass]="{
              'btn-success': showSubmit,
              'btn-outline-success': !showSubmit
            }"
            type="button">SUBMIT
          </button>
        </div>
      </div>
    </div>
  `
})
export class FormStepComponent {
  @Input() title: string;
  @Input() showNext: boolean;
  @Input() showSubmit: boolean;
  @Output() gotoNextStep: EventEmitter<any> = new EventEmitter();
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

}
