import {Type} from '@angular/core';

import {FormInputComponent} from './form-input.component';
import {FormButtonComponent} from './form-button.component';
import {FormSelectComponent} from './form-select.component';
import { FormControlComponent } from '../models/input-config.interface';

export const components: {[type: string]: Type<FormControlComponent>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

