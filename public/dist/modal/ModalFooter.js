// deps
// externals
import * as React from "react";
// component
export default class ModalFooter extends React.PureComponent {
    // name
    static displayName = "ModalFooter";
    // render
    render() {
        let className = "modal-footer";
        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("div", { id: this.props.id, className: className, style: this.props.style }, this.props.children);
    }
}
