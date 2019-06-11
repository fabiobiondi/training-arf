import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAsyncValidatorDirective } from './validators/user-async-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { FormsModule } from '@angular/forms';
import { Ex10TplDrivenCustomValidatorsComponent } from './ex10-tpl-driven-custom-validators.component';

@NgModule({
  declarations: [
    UserAsyncValidatorDirective,
    EmailValidatorDirective,
    Ex10TplDrivenCustomValidatorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Ch10TplDrivenCustomValidatorsModule { }
