import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaseComponent} from './case/case.component';
import {NewComponent} from './new/new.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {GAME_ROUTES} from './game.routes';
import {UserModule} from '../user/user.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(GAME_ROUTES), SharedModule, UserModule],
  declarations: [CaseComponent, NewComponent],
  exports: [CaseComponent, NewComponent]
})
export class GameModule {}
