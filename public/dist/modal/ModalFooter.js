// deps
// externals
import * as React from "react";
// component
class ModalFooter extends React.PureComponent {
    // render
    render() {
        let className = "modal-footer";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("div", { id: this.props.id, className: className, style: this.props.style }, this.props.children);
    }
}
// name
ModalFooter.displayName = "ModalFooter";
export default ModalFooter;
