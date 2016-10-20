import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { UIRouterModule } from "ui-router-ng2";
import { USER_STATES } from './user.routing';

import { UserComponent } from './user.component';

@NgModule({
  imports:      [ CommonModule, FormsModule, ChartsModule, UIRouterModule.forChild({states: USER_STATES}) ],
  declarations: [ UserComponent ],
  exports: [ UserComponent ]
})
export default class UserModule {}