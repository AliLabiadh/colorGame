import {NgModule} from '@angular/core';
import {LoadingComponent} from './loading/loading.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { IfUserDirective } from './if-user.directive';
import { IfNoUserDirective } from './if-no-user.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoadingComponent, FormFieldComponent, IfUserDirective, IfNoUserDirective],
  exports: [LoadingComponent, FormFieldComponent, IfUserDirective, IfNoUserDirective]
})
export class SharedModule {}
