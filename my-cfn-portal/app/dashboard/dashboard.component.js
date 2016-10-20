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
var http_1 = require('@angular/http');
var dashboard_service_1 = require('./dashboard.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, http, dashboardService) {
        this.router = router;
        this.http = http;
        this.dashboardService = dashboardService;
        this.selected = {};
        this.editable = false;
        this.queryObj = {};
    }
    DashboardComponent.prototype.gotoGraph = function () {
        this.router.navigate([
            'graph', this.queryObj
        ]);
    };
    DashboardComponent.prototype.edit = function (name, value) {
        this.router.navigate([
            'dashboard', name
        ]);
    };
    DashboardComponent.prototype.select = function (i) {
        this.editable = true;
        this.selected = {
            name: this.pairs[i].name,
            value: this.pairs[i].value,
            index: i
        };
        var user = { name: 'trinh', password: 'tran' };
        this.dashboardService.create(user).subscribe(function (res) {
            console.log(res);
        });
    };
    DashboardComponent.prototype.set = function (i) {
        this.pairs[i].value = this.selected.value;
        this.editable = false;
    };
    DashboardComponent.prototype.buildParams = function (pairs) {
        var queryObj = {};
        pairs.forEach(function (obj, i) {
            var name = obj.name;
            var value = obj.value;
            queryObj[name] = value;
        });
        return queryObj;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            providers: [dashboard_service_1.DashboardService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map