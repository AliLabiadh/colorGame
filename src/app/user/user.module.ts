import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {USER_ROUTES} from './user.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(USER_ROUTES), ReactiveFormsModule, FormsModule, SharedModule],
  declarations: [LoginComponent, LogoutComponent],
  exports: []
})
export class UserModule {}
