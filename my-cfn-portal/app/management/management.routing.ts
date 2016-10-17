import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: '',
  	component: ManagementComponent
  }
]);
