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
var user_routing_1 = require('./user.routing');
var user_component_1 = require('./user.component');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng2_charts_1.ChartsModule, ui_router_ng2_1.UIRouterModule.forChild({ states: user_routing_1.USER_STATES })],
            declarations: [user_component_1.UserComponent],
            exports: [user_component_1.UserComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserModule;
//# sourceMappingURL=user.module.js.map