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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng2_charts_1 = require('ng2-charts');
var ui_router_ng2_1 = require("ui-router-ng2");
var graph_routing_1 = require('./graph.routing');
var graph_component_1 = require('./graph.component');
var graph_footer_component_1 = require('./graph.footer.component');
var GraphModule = (function () {
    function GraphModule() {
    }
    GraphModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng2_charts_1.ChartsModule, ui_router_ng2_1.UIRouterModule.forChild({ states: graph_routing_1.GRAPH_STATES })],
            declarations: [graph_component_1.GraphComponent, graph_footer_component_1.GraphFooterComponent],
            exports: [graph_component_1.GraphComponent, graph_footer_component_1.GraphFooterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GraphModule);
    return GraphModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GraphModule;
//# sourceMappingURL=graph.module.js.map