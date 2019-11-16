import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex51DynamicFormsNgSwitchCvaComponent } from './ex51-dynamic-forms-ng-switch-cva.component';
import { FbFormInputComponent } from './components/fb-form-input.component';
import { FbFormSelectComponent } from './components/fb-form-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Ex51DynamicFormsNgSwitchCvaComponent,
    FbFormInputComponent,
    FbFormSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class Ch5bDynamicFormsCvaModule { }
