import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import {UIRouterModule} from "ui-router-ng2";
import { GRAPH_STATES } from './graph.routing';

import { GraphComponent } from './graph.component';
import { GraphFooterComponent } from './graph.footer.component';

@NgModule({
	imports:      [ CommonModule, FormsModule, ChartsModule, UIRouterModule.forChild({states: GRAPH_STATES}) ],
	declarations: [ GraphComponent, GraphFooterComponent ],
	exports: [ GraphComponent, GraphFooterComponent ]
})
export default class GraphModule {}