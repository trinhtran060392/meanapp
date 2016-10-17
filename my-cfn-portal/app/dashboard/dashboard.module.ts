import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { DASHBOARD_STATES } from './dashboard.routing';
import {UIRouterModule} from "ui-router-ng2";
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailComponent } from './dashboard.detail.component';
import { DashboardFooterComponent } from './dashboard.footer.component';

@NgModule({
	imports:      [ CommonModule, FormsModule, UIRouterModule.forChild({states: DASHBOARD_STATES})],
	declarations: [ DashboardComponent, DashboardDetailComponent, DashboardFooterComponent ],
	exports: [ DashboardComponent, DashboardDetailComponent, DashboardFooterComponent ]
})
export default class DashboardModule {}