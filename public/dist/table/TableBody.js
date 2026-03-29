// deps
// externals
import * as React from "react";
// component
export default class TableBody extends React.PureComponent {
    // name
    static displayName = "TableBody";
    // render
    render() {
        return React.createElement("tbody", { id: this.props.id, className: this.props.className, style: this.props.style }, this.props.children);
    }
}
