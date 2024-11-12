"use strict";
// deps
// externals
import * as React from "react";
// locals
import Icon from "./Icon";
// component
class Button extends React.PureComponent {
    // events
    _handleClick(e) {
        if ("function" === typeof this.props.onClick) {
            this.props.onClick(e);
        }
        else if ("button" === this.props.type) { // let "submit" & "reset" legit events do there jobs
            e.preventDefault();
            e.stopPropagation();
        }
    }
    // render
    render() {
        const disabled = !!this.props.disabled;
        let className = "btn";
        if (this.props.variant) {
            className += " " + (this.props.outline ? "btn-outline-" + this.props.variant : "btn-" + this.props.variant);
        }
        else {
            className += " " + (this.props.outline ? "btn-outline-primary" : "btn-primary");
        }
        if ("lg" === this.props.size) {
            className += " btn-lg";
        }
        else if ("sm" === this.props.size) {
            className += " btn-sm";
        }
        if (disabled) {
            className += " disabled";
        }
        if (Boolean(this.props.block)) {
            className += " col-12";
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("button", { id: this.props.id, role: "button", type: this.props.type ? this.props.type : "button", className: className, style: this.props.style, disabled: disabled, "aria-disabled": disabled, title: this.props.title, "aria-label": this.props.title, onClick: this._handleClick.bind(this) },
            this.props.icon ? React.createElement(Icon, { type: this.props.icon, child: true }) : undefined,
            this.props.icon && this.props.children ? React.createElement(React.Fragment, null, "\u00A0") : undefined,
            this.props.children);
    }
}
// name
Button.displayName = "Button";
export default Button;
