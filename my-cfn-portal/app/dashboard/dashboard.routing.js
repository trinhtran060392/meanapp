"use strict";
var dashboard_component_1 = require('./dashboard.component');
var dashboard_footer_component_1 = require('./dashboard.footer.component');
var dashboard_detail_component_1 = require('./dashboard.detail.component');
exports.DASHBOARD_STATES = [
    {
        name: 'app.dashboard',
        url: '/dashboard',
        views: {
            $default: { component: dashboard_component_1.DashboardComponent },
            footer: { component: dashboard_footer_component_1.DashboardFooterComponent }
        }
    },
    {
        name: 'app.dashboard.detail',
        url: '/:id',
        views: {
            $default: { component: dashboard_detail_component_1.DashboardDetailComponent }
        }
    }
];
//# sourceMappingURL=dashboard.routing.js.map