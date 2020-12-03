import {NgModule} from '@angular/core';
import {LoadingComponent} from './loading/loading.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoadingComponent, FormFieldComponent],
  exports: [LoadingComponent, FormFieldComponent]
})
export class SharedModule {}
