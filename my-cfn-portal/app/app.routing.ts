import {AppComponent} from "./app.component";
import { Ng2StateDeclaration, loadNgModule } from "ui-router-ng2";

export let MAIN_STATES: Ng2StateDeclaration[] = [
	{ 
		name: 'app', component: AppComponent 
	},
  {
    name: 'app.dashboard',
    url: '/dashboard',
    lazyLoad: loadNgModule('app/dashboard/dashboard.module')
	},
	{ 
		name: 'app.graph', 
		url: '/graph',
		lazyLoad: loadNgModule('app/graph/graph.module')
	},
  {
    name: 'app.user',
    url: '/user',
    lazyLoad: loadNgModule('app/user/user.module')
  }
];
