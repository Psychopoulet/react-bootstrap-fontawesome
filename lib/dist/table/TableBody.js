"use strict";
// deps
// externals
import * as React from "react";
// component
class TableBody extends React.PureComponent {
    // render
    render() {
        return React.createElement("tbody", { id: this.props.id, className: this.props.className, style: this.props.style }, this.props.children);
    }
}
// name
TableBody.displayName = "TableBody";
export default TableBody;
