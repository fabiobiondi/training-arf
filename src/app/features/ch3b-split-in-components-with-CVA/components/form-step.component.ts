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
            [disabled]="!showNextButton"
            (click)="gotoNextStep.emit()"
            class="btn"
            [ngClass]="{
              'btn-warning': showNextButton,
              'btn-outline-warning': !showNextButton
            }"
            type="button">NEXT
          </button>

          <button
            [disabled]="!showSubmitButton"
            (click)="submitForm.emit()"
            class="btn"
            [ngClass]="{
              'btn-success': showSubmitButton,
              'btn-outline-success': !showSubmitButton
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
  @Input() showNextButton: boolean;
  @Input() showSubmitButton: boolean;
  @Output() gotoNextStep: EventEmitter<any> = new EventEmitter();
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
}
