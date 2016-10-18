import { Component, OnChanges, SimpleChanges, Input, DoCheck, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Pair } from './pair';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.html',
  providers: [ DashboardService ]
})
export class DashboardComponent {

	selected: any = {
	};
	editable: boolean = false;
	queryObj = {};
	pairs : Pair[];
	constructor(private router: Router, private http: Http, private dashboardService : DashboardService) {
		dashboardService.getAll().subscribe(res => {
			this.pairs = res
		});
	}

	gotoGraph() {
		this.router.navigate([
			'graph', this.queryObj
		]);
	}

	edit(name: string, value: string) {
		this.router.navigate([
			'dashboard', name
		]);
	}

	select(i: any) {
		this.http.get('http://localhost:3000');
		this.editable = true;
		this.selected = {
			name: this.pairs[i].name,
			value: this.pairs[i].value,
			index: i
		}
	}

	set(i: any) {
		this.pairs[i].value = this.selected.value;
		this.editable = false;
	}

	buildParams(pairs : Pair[]) {

		var queryObj = {};
		pairs.forEach(function (obj, i) {
			let name = obj.name;
			let value = obj.value;
			queryObj[name] = value
			
		});
		return queryObj;
	}
}
