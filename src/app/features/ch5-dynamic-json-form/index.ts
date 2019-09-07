import { Ex50DynamicFormJsonComponent } from './ex50-dynamic-form-json.component';
import { FormInputComponent } from './form-controls/form-input.component';
import { FormSelectComponent } from './form-controls/form-select.component';
import { FormButtonComponent } from './form-controls/form-button.component';
import { DynamicControlDirective } from './form-components/dynamic-control.directive';

export const COMPONENTS = [
  Ex50DynamicFormJsonComponent,
  FormInputComponent,
  FormSelectComponent,
  FormButtonComponent

];

export const DIRECTIVES = [
  DynamicControlDirective
];

export const ENTRY_COMPONENTS = [
  FormInputComponent,
  FormSelectComponent,
  FormButtonComponent
];
