import {Type} from '@angular/core';
import { FbFormInputComponent } from './fb-form-input.component';
import { FbFormSelectComponent } from './fb-form-select.component';


export const COMPONENTS: {[type: string]: Type<any>} = {
  select: FbFormSelectComponent,
  input: FbFormInputComponent
};
