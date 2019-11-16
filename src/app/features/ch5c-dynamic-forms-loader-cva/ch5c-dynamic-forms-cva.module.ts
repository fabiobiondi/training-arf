import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex52DynamicFormsLoaderCvaComponent } from './ex52-dynamic-forms-loader-cva.component';
import { FbFormInputComponent } from './components/fb-form-input.component';
import { FbFormSelectComponent } from './components/fb-form-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicLoaderDirective } from './components/dynamic-loader.directive';

@NgModule({
  declarations: [
    Ex52DynamicFormsLoaderCvaComponent,
    FbFormInputComponent,
    FbFormSelectComponent,
    DynamicLoaderDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    FbFormInputComponent,
    FbFormSelectComponent,
  ],
})
export class Ch5cDynamicFormsCvaModule { }
