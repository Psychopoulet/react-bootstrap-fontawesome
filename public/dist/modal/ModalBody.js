// deps
// externals
import * as React from "react";
// component
export default class ModalBody extends React.PureComponent {
    // name
    static displayName = "ModalBody";
    // render
    render() {
        let className = "modal-body";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("div", { id: this.props.id, className: className, style: this.props.style }, this.props.children);
    }
}
