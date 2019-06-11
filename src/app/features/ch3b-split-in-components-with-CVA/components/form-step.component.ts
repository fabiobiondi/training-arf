import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fb-multi-step',
  template: `
    <div class="card">
      <div class="card-header">{{stepName}}</div>
      
      <div class="card-body">
        <ng-content></ng-content>

        <hr>
        <div class="btn-group">
          <button
            [disabled]="!isNext"
            (click)="next.emit()"
            class="btn"
            [ngClass]="{
              'btn-warning': isNext,
              'btn-outline-warning': !isNext
            }"
            type="button">NEXT</button>
  
          <button
            [disabled]="!isSubmit"
            (click)="submit.emit()"
            class="btn"
            [ngClass]="{
              'btn-success': isSubmit,
              'btn-outline-success': !isSubmit
            }"
            type="button">SUBMIT</button>
        </div>
      </div>
    </div>
  `
})
export class FormStepComponent {
  @Input() stepName: string;
  @Input() isNext: boolean;
  @Input() isSubmit: boolean;
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

}
