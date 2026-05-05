// deps
// externals
import * as React from "react";
// component
export default class TableFooter extends React.PureComponent {
    // name
    static displayName = "TableFooter";
    // render
    render() {
        return React.createElement("tfoot", { id: this.props.id, className: this.props.className, style: this.props.style }, this.props.children);
    }
}
