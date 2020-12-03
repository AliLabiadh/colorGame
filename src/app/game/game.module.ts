import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseComponent} from './case/case.component';
import {NewComponent} from './new/new.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {GAME_ROUTES} from './game.routes';
import {UserModule} from '../user/user.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(GAME_ROUTES), SharedModule, UserModule, FormsModule, ReactiveFormsModule],
  declarations: [CaseComponent, NewComponent],
  exports: []
})
export class GameModule {}
