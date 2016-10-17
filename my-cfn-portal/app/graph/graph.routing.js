"use strict";
var graph_component_1 = require('./graph.component');
var graph_footer_component_1 = require('./graph.footer.component');
exports.GRAPH_STATES = [
    {
        name: 'app.graph',
        url: '/graph?params',
        views: {
            $default: { component: graph_component_1.GraphComponent },
            footer: { component: graph_footer_component_1.GraphFooterComponent }
        }
    }
];
//# sourceMappingURL=graph.routing.js.map