"use strict";
// deps
// externals
import * as React from "react";
// locals
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
// component
class Table extends React.PureComponent {
    // render
    render() {
        let className = "table";
        if (this.props.variant) {
            className += " table-" + this.props.variant;
        }
        if (!!this.props.responsive) {
            className += " table-responsive";
        }
        if (!!this.props.bordered) {
            className += " table-bordered";
        }
        else if (!!this.props.borderless) {
            className += " table-borderless";
        }
        if (!!this.props.striped) {
            className += " table-striped";
        }
        if (!!this.props.hover) {
            className += " table-hover";
        }
        if (!!this.props.small) {
            className += " table-sm";
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("table", { id: this.props.id, className: className, style: this.props.style }, React.Children.toArray(this.props.children).filter((child) => {
            return TableHeader === child.type
                || TableBody === child.type
                || TableFooter === child.type;
        }));
    }
}
// name
Table.displayName = "Table";
export default Table;
