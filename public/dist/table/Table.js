// deps
// externals
import * as React from "react";
// locals
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
// component
export default class Table extends React.PureComponent {
    // name
    static displayName = "Table";
    // render
    render() {
        let className = "table";
        if (this.props.variant) {
            className += " table-" + this.props.variant;
        }
        if ("boolean" === typeof this.props.responsive && this.props.responsive) {
            className += " table-responsive";
        }
        if ("boolean" === typeof this.props.bordered && this.props.bordered) {
            className += " table-bordered";
        }
        else if ("boolean" === typeof this.props.borderless && this.props.borderless) {
            className += " table-borderless";
        }
        if ("boolean" === typeof this.props.striped && this.props.striped) {
            className += " table-striped";
        }
        if ("boolean" === typeof this.props.hover && this.props.hover) {
            className += " table-hover";
        }
        if ("boolean" === typeof this.props.small && this.props.small) {
            className += " table-sm";
        }
        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("table", { id: this.props.id, className: className, style: this.props.style }, React.Children.toArray(this.props.children).filter((child) => {
            return TableHeader === child.type
                || TableBody === child.type
                || TableFooter === child.type;
        }));
    }
}
