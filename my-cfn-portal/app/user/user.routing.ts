import { UserComponent } from './user.component';
import { Ng2StateDeclaration } from "ui-router-ng2";

export let USER_STATES: Ng2StateDeclaration[] = [
    {
      name: 'app.user',
      url: '/user',
      views: {
        $default: {component: UserComponent}
      }
    }
];