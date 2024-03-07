"use strict";
// deps
// externals
import * as React from "react";
// locals
import Table from "../table/Table";
// component
class CardTable extends React.PureComponent {
    // render
    render() {
        return React.createElement(Table, { id: this.props.id, className: "m-0" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, variant: this.props.variant, bordered: this.props.bordered, borderless: this.props.borderless, striped: this.props.striped, hover: this.props.hover, small: this.props.small }, this.props.children);
    }
}
// name
CardTable.displayName = "CardTable";
export default CardTable;
