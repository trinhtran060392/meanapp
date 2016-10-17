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
var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.selected = {};
        this.editable = false;
        this.queryObj = {};
        this.pairs = [
            {
                name: "a",
                value: 9,
                min: 2,
                max: 10
            }, {
                name: "b",
                value: 4,
                min: 1,
                max: 9
            }, {
                name: "c",
                value: 6,
                min: 0,
                max: 10
            }, {
                name: "d",
                value: 8,
                min: 1,
                max: 10
            }
        ];
    }
    DashboardComponent.prototype.ngDoCheck = function () {
        this.queryObj = this.buildParams(this.pairs);
    };
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DashboardComponent.prototype, "pairs", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map