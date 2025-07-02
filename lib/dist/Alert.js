"use strict";
// deps
// externals
import * as React from "react";
// component
class Alert extends React.PureComponent {
    // render
    render() {
        let className = "alert";
        if (this.props.variant) {
            className += " alert-" + this.props.variant;
        }
        if ("function" === typeof this.props.onClose) {
            className += " alert-dismissible fade show";
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("div", { id: this.props.id, className: className, role: "alert", style: this.props.style },
            this.props.children,
            "function" === typeof this.props.onClose ? React.createElement("button", { type: "button", className: "btn-close", "data-dismiss": "alert", "aria-label": "Close", onClick: this.props.onClose }) : undefined);
    }
}
// name
Alert.displayName = "Alert";
export default Alert;
