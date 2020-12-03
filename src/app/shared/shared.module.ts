import {NgModule} from '@angular/core';
import {LoadingComponent} from './loading/loading.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent, FormFieldComponent],
  exports: [LoadingComponent, FormFieldComponent]
})
export class SharedModule {}
