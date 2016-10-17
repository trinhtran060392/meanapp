"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var GraphComponent = (function () {
    function GraphComponent(route, router) {
        this.route = route;
        this.router = router;
        this.labels = [];
        this.dataset = [];
        this.barChartOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            isFixedWidth: false,
            barWidth: 20
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: this.dataset, label: 'Value' }
        ];
    }
    GraphComponent.prototype.ngOnInit = function () {
        console.log(1);
    };
    // events
    GraphComponent.prototype.chartClicked = function (e) {
    };
    GraphComponent.prototype.chartHovered = function (e) {
    };
    GraphComponent = __decorate([
        core_1.Component({
            selector: 'my-graph',
            templateUrl: 'app/graph/graph.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], GraphComponent);
    return GraphComponent;
}());
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map