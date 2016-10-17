import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { routing } from './management.routing';

import { ManagementComponent } from './management.component';

@NgModule({

	imports: [CommonModule, FormsModule, routing],
	declarations: [ManagementComponent],
	exports: [ManagementComponent]
})

export class ManagementModule {}