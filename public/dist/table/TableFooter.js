// deps
// externals
import * as React from "react";
// component
class TableFooter extends React.PureComponent {
    // render
    render() {
        return React.createElement("tfoot", { id: this.props.id, className: this.props.className, style: this.props.style }, this.props.children);
    }
}
// name
TableFooter.displayName = "TableFooter";
export default TableFooter;
