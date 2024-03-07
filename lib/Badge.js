"use strict";
// deps
// externals
import * as React from "react";
// locals
import Icon from "./Icon";
// component
class Badge extends React.PureComponent {
    // render
    render() {
        let className = "badge";
        if (this.props.variant) {
            className += " bg-" + this.props.variant;
        }
        else {
            className += " text-body";
        }
        if (!!this.props.pill) {
            className += " rounded-pill";
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("span", { id: this.props.id, title: this.props.title, className: className, style: this.props.style },
            this.props.icon ? React.createElement(Icon, { type: this.props.icon, child: true }) : null,
            this.props.children);
    }
}
// name
Badge.displayName = "Badge";
export default Badge;
