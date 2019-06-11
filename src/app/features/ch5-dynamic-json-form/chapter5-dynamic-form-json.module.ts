import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { COMPONENTS, DIRECTIVES, ENTRY_COMPONENTS } from './index';

@NgModule({
  declarations: [...COMPONENTS, ...ENTRY_COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class Chapter5DynamicFormJsonModule {

}
