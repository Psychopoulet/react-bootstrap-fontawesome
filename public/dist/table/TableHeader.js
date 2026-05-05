// deps
// externals
import * as React from "react";
// component
export default class TableHeader extends React.PureComponent {
    // name
    static displayName = "TableHeader";
    // render
    render() {
        return React.createElement("thead", { id: this.props.id, className: this.props.className, style: this.props.style }, this.props.children);
    }
}
