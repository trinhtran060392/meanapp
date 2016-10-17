import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'my-graph',
	templateUrl: 'app/graph/graph.html'
})
export class GraphComponent {

	constructor(private route: ActivatedRoute, private router: Router) {
	}
	public labels:string[] = [];
	public dataset:string[] = [];

	ngOnInit() {
		console.log(1);
	}
	public barChartOptions:any = {
	    scales: {
	    	yAxes: [
	    		{
	    			ticks: {
	    				beginAtZero: true
	    			}
	    		}
	    	]
	    },
	    isFixedWidth:false,
	    barWidth:20
	};

	 public barChartType:string = 'bar';
	 public barChartLegend:boolean = true;

	public barChartData:any[] = [
	   {data: this.dataset, label: 'Value'}
	];

	// events
	public chartClicked(e:any):void {
	}

	public chartHovered(e:any):void {
	}
}