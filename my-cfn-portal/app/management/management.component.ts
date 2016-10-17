import { Component, OnInit } from '@angular/core';

import { ManagementService } from './management.service';

@Component({

	selector: 'my-management',
	templateUrl: 'app/management/management.html',
	providers: [ManagementService]

})

export class ManagementComponent implements OnInit {

	dataset: any[];
	constructor(private managementService: ManagementService) {

	}

	ngOnInit() {
	}

	add(name: any) {
	}
}