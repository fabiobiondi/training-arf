import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fb-ex23-form-array',
  template: `
    <form [formGroup]="orderForm">
      <div formArrayName="items" 
           *ngFor="let item of items.controls; let i = index; let last = last">

        <div [formGroupName]="i" class="form-group form-inline">
          {{item.valid}}
          <i class="fa fa-exclamation-circle fa-2x text-danger" *ngIf="item.invalid"></i>
          <i class="fa fa-check-circle fa-2x text-success" *ngIf="item.valid"></i>

          <input formControlName="name" placeholder="Item name *" class="form-control ml-2 mr-2">
          <input formControlName="price" placeholder="Item price *" class="form-control mr-2">

          <i class="fa fa-trash-o fa-2x mr-2" (click)="removeItem(item)" *ngIf="items.controls.length > 1"></i>
          <i class="fa fa-plus-circle fa-2x" (click)="addItem()" *ngIf="item?.valid && last"></i>
        </div>
      </div>
      
      <hr>
      <button 
        class="btn btn-primary" 
        (click)="submit()" 
        [disabled]="orderForm.invalid">Submit</button>
    </form>
    
    <pre>
      {{orderForm.value | json}}
    </pre>
  `,
})
export class Ex23FormArrayComponent {
  orderForm: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      items: this.fb.array([ ]) as AbstractControl
    });
    this.items = this.orderForm.get('items') as FormArray;
    this.addItem();
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['',  Validators.required],
      price: ['',  Validators.required],
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(item: AbstractControl): void {
    const index = this.items.controls.indexOf(item);
    this.items.removeAt(index);
  }

  submit() {
    alert('ITEMS: ' + JSON.stringify(this.orderForm.value.items));
  }

}
