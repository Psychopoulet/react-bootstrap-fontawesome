"use strict";
// deps
// externals
import * as React from "react";
// component
class NavItem extends React.PureComponent {
    // constructor
    constructor(props) {
        super(props);
        // events handlers
        this.handleClick = this.handleClick.bind(this);
    }
    // events
    handleClick(e) {
        if ("function" === typeof this.props.onClick) {
            this.props.onClick(e, this.props.index);
        }
        else {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    // render
    render() {
        const disabled = !!this.props.disabled;
        let className = "nav-item";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        let linkClassName = "nav-link";
        if (disabled) {
            linkClassName += " disabled";
        }
        if (!!this.props.active) {
            linkClassName += " active";
        }
        if (!!this.props.justify) {
            linkClassName += " d-flex justify-content-between";
        }
        return React.createElement("div", { id: this.props.id, className: className, style: this.props.style }, disabled ? React.createElement("span", { className: linkClassName, role: "presentation", "aria-disabled": disabled ? "true" : undefined, tabIndex: disabled ? -1 : undefined }, this.props.children) : React.createElement("a", { href: "#", className: linkClassName, role: "presentation", "aria-disabled": disabled ? "true" : undefined, tabIndex: disabled ? -1 : undefined, onClick: this.handleClick }, this.props.children));
    }
}
// name
NavItem.displayName = "NavItem";
export default NavItem;
