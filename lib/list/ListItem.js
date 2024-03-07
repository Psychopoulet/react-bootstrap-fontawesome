"use strict";
// deps
// externals
import * as React from "react";
// locals
import { ListContext } from "./ListContext";
// component
class ListItem extends React.PureComponent {
    // render
    render() {
        return React.createElement(ListContext.Consumer, null, (variant) => {
            const disabled = !!this.props.disabled;
            let className = "list-group-item";
            if (!!this.props.justify) {
                className += " d-flex justify-content-between align-items-center";
            }
            if (this.props.variant) {
                className += " list-group-item-" + this.props.variant;
            }
            else if (variant) {
                className += " text-" + variant;
            }
            if (disabled) {
                className += " disabled";
            }
            if (!!this.props.active) {
                className += " active";
            }
            if ("function" === typeof this.props.onClick) {
                className += " list-group-item-action";
            }
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return "function" === typeof this.props.onClick && !disabled ? React.createElement("a", { href: "#", id: this.props.id, className: className, style: this.props.style, "aria-disabled": disabled ? "true" : undefined, onClick: this.props.onClick }, this.props.children) : React.createElement("div", { id: this.props.id, className: className, style: this.props.style, "aria-disabled": disabled ? "true" : undefined }, this.props.children);
        });
    }
}
// name
ListItem.displayName = "ListItem";
export default ListItem;
