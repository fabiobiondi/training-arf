import { Routes } from '@angular/router';

import { Ex1FormRxjsComponent } from './features/ch1-reactive-forms-intro/ex1-form-rxjs.component';
import { Ex2FormControlComponent } from './features/ch1-reactive-forms-intro/ex2-form-control.component';
import { Ex3StaticFormLayoutComponent } from './features/ch1-reactive-forms-intro/ex3-static-form-layout.component';
import { Ex4FormBuilderComponent } from './features/ch1-reactive-forms-intro/ex4-form-builder.component';
import { Ex5CustomValidatorParamsComponent } from './features/ch1-reactive-forms-intro/ex5-custom-validators.component';
import { Ex6ConditionalValidatorComponent } from './features/ch1-reactive-forms-intro/ex6-conditional-valitators.component';

import { Ex20NestedGroupsComponent } from './features/ch2-nested-groups/ex20-nested-groups.component';
import { Ex23FormArrayComponent } from './features/ch2-nested-groups/ex23-form-array.component';

import { Ex30SplitComponent } from './features/ch3-split-in-components/ex30-split.component';
import { Ex40GroupValidatorsComponent } from './features/ch4-extra/ex40-group-validators.component';
import { Ex41AsyncValidatorsComponent } from './features/ch4-extra/ex41-async-validators.component';
import { Ex50DynamicFormJsonComponent } from './features/ch5-dynamic-json-form/ex50-dynamic-form-json.component';
import { ChaptersComponent } from './features/_chapters-menu/chapters.component';
import { Ex62ColorPickerComponent } from './features/ch6-custom-form-controls-cva/ex62-color-picker.component';
import { Ex2FormControlRxjsOperatorsComponent } from './features/ch1-reactive-forms-intro/ex2-form-control-rxjs-operators.component';
import { Ex10TplDrivenCustomValidatorsComponent } from './features/ch10-tpl-driven-custom-validators/ex10-tpl-driven-custom-validators.component';
import { Ex31SplitWithCVAComponent } from './features/ch3b-split-in-components-with-CVA/ex31-split-with-CVA.component';
import { Ex32SplitWithCVAAndTemplateDrivenComponent } from './features/ch3b-split-in-components-with-CVA/ex32-split-with-CVA-and-template-driven.component';
import { Ex33MultistepFormsWithCVAComponent } from './features/ch3b-split-in-components-with-CVA/ex33-multistep-forms-with-CVA.component';
import { Ex61StarComponent } from './features/ch6-custom-form-controls-cva/ex61-star.component';
import { Ex60ControlsComponent } from './features/ch6-custom-form-controls-cva/ex60-controls.component';
import { Ex60bControlsComponent } from './features/ch6-custom-form-controls-cva/ex60b-controls.component';
import { Ex51DynamicFormsNgSwitchCvaComponent } from './features/ch5b-dynamic-forms-ng-switch-cva/ex51-dynamic-forms-ng-switch-cva.component';
import { Ex52DynamicFormsLoaderCvaComponent } from './features/ch5c-dynamic-forms-loader-cva/ex52-dynamic-forms-loader-cva.component';

export const routes: Routes = [
  // chapter 1: fundamentals
  { path: 'ex1-form-rxjs', component: Ex1FormRxjsComponent, data: {label: 'Form, ViewChild & RXJS'}},
  { path: 'ex2-form-control', component: Ex2FormControlComponent, data: {label: 'FormControl'}},
  { path: 'ex2-form-control-rxjs-op', component: Ex2FormControlRxjsOperatorsComponent, data: {label: 'FormControl, RXJS operators, error handling'}},
  { path: 'ex3-form-builder', component: Ex3StaticFormLayoutComponent, data: {label: 'Form Builder Static Layout (no Angular)'}},
  { path: 'ex4-form-builder', component: Ex4FormBuilderComponent, data: {label: 'FormBuilder & Custom Validators'}},
  { path: 'ex5-validator-params', component: Ex5CustomValidatorParamsComponent, data: {label: 'Custom Validators with params'}},
  { path: 'ex6-conditional-validators', component: Ex6ConditionalValidatorComponent, data: {label: 'Conditional Validators'}},
  // chapter 2: Nested Groups
  { path: 'ex60-custom-controls-cva', component: Ex60ControlsComponent, data: {label: 'ControlValueAccessor: custom input control (simple)'}},
  { path: 'ex60B-custom-controls-cva', component: Ex60bControlsComponent, data: {label: 'ControlValueAccessor: custom input control (custom errors & access control state)'}},
  { path: 'ex61-star-custom-form-control-cva', component: Ex61StarComponent, data: {label: 'ControlValueAccessor: Star / Rate custom control'}},
  { path: 'ex62-color-custom-form-control-cva', component: Ex62ColorPickerComponent, data: {label: 'ControlValueAccessor: Color Picker custom control'}},

  { path: 'ex20-nested-groups', component: Ex20NestedGroupsComponent, data: {label: 'Nested Group'}},
  // chapter 3: Split in Components
  { path: 'ex30-split-in-components', component: Ex30SplitComponent, data: {label: 'Split Form in Components'}},
  { path: 'ex31-split-in-components-with-CVA', component: Ex31SplitWithCVAComponent, data: {label: 'Split Form in Components with ControlValueAccessor'}},
  { path: 'ex32-split-in-components-with-CVA-tpl', component: Ex32SplitWithCVAAndTemplateDrivenComponent, data: {label: 'Split Form in Components with ControlValueAccessor & template-driven form'}},
  { path: 'ex33-multistep-forms-with-CVA', component: Ex33MultistepFormsWithCVAComponent, data: {label: 'Multistep Form with ControlValueAccessor'}},
  // chapter 4: Extra
  { path: 'ex40-group-validator', component: Ex40GroupValidatorsComponent, data: {label: 'Group Custom Validator (password match)'}},
  { path: 'ex41-async-validator', component: Ex41AsyncValidatorsComponent, data: {label: 'Async Control (User) Validator'}},
  { path: 'ex23-form-array', component: Ex23FormArrayComponent, data: {label: 'Form Array'}},
  // chapter 5: Dynamic Form
  { path: 'ex50-dynamic-form-json-by-reference', component: Ex50DynamicFormJsonComponent, data: {label: 'Dynamic Form by reference from JSON (with ngSwitch & custom loader directive)'}},
  { path: 'ex51-dynamic-form-json-ng-switch-cva', component: Ex51DynamicFormsNgSwitchCvaComponent, data: {label: 'Dynamic Form Created from JSON (with ngSwitch & CVA)'}},
  { path: 'ex52-dynamic-form-json-loader-cva', component: Ex52DynamicFormsLoaderCvaComponent, data: {label: 'Dynamic Form Created from JSON (with Loader & CVA)'}},
  { path: 'ex100-tpl-driven-custom-validator', component: Ex10TplDrivenCustomValidatorsComponent, data: {label: 'Template Driven Custom Sync & Async Validator'}},
  { path: '', component: ChaptersComponent}
];

