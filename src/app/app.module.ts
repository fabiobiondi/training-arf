import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RouteHeaderComponent } from './core/route-header.component';

import { AppComponent } from './app.component';
import { ChaptersComponent } from './features/_chapters-menu/chapters.component';
import { Chapter1Module } from './features/ch1-reactive-forms-intro/chapter1.module';
import { Chapter100UnitTestModule } from './features/ch100-with-unit-test/chapter100.module';
import { Chapter2NestedGroupsModule } from './features/ch2-nested-groups/chapter2-nested-groups.module';
import { Chapter3SplitInComponentsModule } from './features/ch3-split-in-components/chapter3-split-in-components.module';
import { Chapter3SplitInComponentsWithCVAModule } from './features/ch3b-split-in-components-with-CVA/chapter3-split-in-components-with-CVA.module';
import { Chapter4ExtraModule } from './features/ch4-extra/chapter4-extra.module';
import { Chapter5DynamicFormJsonModule } from './features/ch5-dynamic-json-form/chapter5-dynamic-form-json.module';
import { Ch10TplDrivenCustomValidatorsModule } from './features/ch10-tpl-driven-custom-validators/ch10-tpl-driven-custom-validators.module';
import { Chapter6CvaModule } from './features/ch6-custom-form-controls-cva/chapter6-cva.module';
import { Ch5cDynamicFormsCvaModule } from './features/ch5c-dynamic-forms-loader-cva/ch5c-dynamic-forms-cva.module';
import { Ch5bDynamicFormsCvaModule } from './features/ch5b-dynamic-forms-ng-switch-cva/ch5b-dynamic-forms-cva.module';

@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    RouteHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Chapter1Module,
    Chapter2NestedGroupsModule,
    Chapter3SplitInComponentsModule,
    Chapter3SplitInComponentsWithCVAModule,
    Chapter4ExtraModule,
    Chapter5DynamicFormJsonModule,
    Ch5bDynamicFormsCvaModule,
    Ch5cDynamicFormsCvaModule,
    Chapter6CvaModule,
    Ch10TplDrivenCustomValidatorsModule,
    Chapter100UnitTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
