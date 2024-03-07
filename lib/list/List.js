"use strict";
// deps
// externals
import * as React from "react";
// locals
import { ListContext } from "./ListContext";
// component
class List extends React.PureComponent {
    // render
    render() {
        let className = "list-group";
        if (!!this.props.flush) {
            className += " list-group-flush";
        }
        if (this.props.horizontal) {
            switch (this.props.horizontal) {
                case "sm":
                    className += " list-group-horizontal-sm";
                    break;
                case "md":
                    className += " list-group-horizontal-md";
                    break;
                case "lg":
                    className += " list-group-horizontal-lg";
                    break;
                case "xl":
                    className += " list-group-horizontal-xl";
                    break;
                default:
                    className += " list-group-horizontal";
                    break;
            }
            className += " list-group-horizontal";
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement(ListContext.Provider, { value: this.props.variant },
            React.createElement("div", { id: this.props.id, role: "tablist", className: className, style: this.props.style }, this.props.children));
    }
}
// name
List.displayName = "List";
export default List;
