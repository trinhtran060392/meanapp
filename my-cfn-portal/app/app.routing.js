"use strict";
var app_component_1 = require("./app.component");
var ui_router_ng2_1 = require("ui-router-ng2");
exports.MAIN_STATES = [
    {
        name: 'app', component: app_component_1.AppComponent
    },
    {
        name: 'app.dashboard',
        url: '/dashboard',
        lazyLoad: ui_router_ng2_1.loadNgModule('app/dashboard/dashboard.module')
    },
    {
        name: 'app.graph',
        url: '/graph',
        lazyLoad: ui_router_ng2_1.loadNgModule('app/graph/graph.module')
    },
    {
        name: 'app.user',
        url: '/user',
        lazyLoad: ui_router_ng2_1.loadNgModule('app/user/user.module')
    }
];
//# sourceMappingURL=app.routing.js.map