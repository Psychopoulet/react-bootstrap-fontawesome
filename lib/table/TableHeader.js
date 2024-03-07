"use strict";
// deps
// externals
import * as React from "react";
// component
class TableHeader extends React.PureComponent {
    // render
    render() {
        return React.createElement("thead", { id: this.props.id, className: this.props.className, style: this.props.style }, this.props.children);
    }
}
// name
TableHeader.displayName = "TableHeader";
export default TableHeader;
