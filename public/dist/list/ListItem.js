// deps
// externals
import * as React from "react";
// locals
import { ListContext } from "./ListContext";
// component
export default class ListItem extends React.PureComponent {
    // name
    static displayName = "ListItem";
    // render
    render() {
        return React.createElement(ListContext.Consumer, null, (variant) => {
            const disabled = Boolean(this.props.disabled);
            let className = "list-group-item";
            if (Boolean(this.props.justify)) {
                className += " d-flex justify-content-between align-items-center";
            }
            if ("string" === typeof this.props.variant) {
                className += " list-group-item-" + this.props.variant;
            }
            else if (variant) {
                className += " text-" + variant;
            }
            if (disabled) {
                className += " disabled";
            }
            if (Boolean(this.props.active)) {
                className += " active";
            }
            if ("function" === typeof this.props.onClick) {
                className += " list-group-item-action";
            }
            if ("string" === typeof this.props.className) {
                className += " " + this.props.className;
            }
            return "function" === typeof this.props.onClick && !disabled ? React.createElement("a", { href: "#", id: this.props.id, className: className, style: this.props.style, "aria-disabled": disabled ? "true" : undefined, onClick: this.props.onClick }, this.props.children) : React.createElement("div", { id: this.props.id, className: className, style: this.props.style, "aria-disabled": disabled ? "true" : undefined }, this.props.children);
        });
    }
}
