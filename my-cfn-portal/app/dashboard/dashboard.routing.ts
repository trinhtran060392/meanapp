import { DashboardComponent } from './dashboard.component';
import { DashboardFooterComponent } from './dashboard.footer.component';
import { DashboardDetailComponent } from './dashboard.detail.component';
import { Ng2StateDeclaration } from "ui-router-ng2";

export let DASHBOARD_STATES: Ng2StateDeclaration[] = [
    {
      name: 'app.dashboard',
      url: '/dashboard',
      views: {
        $default: {component: DashboardComponent},
        footer: { component: DashboardFooterComponent}
      }
    },
    {
      name: 'app.dashboard.detail',
      url: '/:id',
      views: {
        $default: {component: DashboardDetailComponent}
      }
    }
];

