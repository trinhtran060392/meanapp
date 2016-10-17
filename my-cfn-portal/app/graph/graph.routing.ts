import { GraphComponent } from './graph.component';
import { Ng2StateDeclaration } from "ui-router-ng2";

import { GraphFooterComponent } from './graph.footer.component';
export let GRAPH_STATES: Ng2StateDeclaration[] = [
    {
      name: 'app.graph',
      url: '/graph?params',
      views: {
        $default: {component: GraphComponent},
        footer: {component: GraphFooterComponent}
      }
    }
];