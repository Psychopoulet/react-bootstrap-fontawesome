// deps
// externals
import * as React from "react";
// component
export default class ListItemHeader extends React.PureComponent {
    // name
    static displayName = "ListItemHeader";
    // render
    render() {
        let className = "list-group-item-heading";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("h4", { id: this.props.id, className: className, style: this.props.style }, this.props.children);
    }
}
