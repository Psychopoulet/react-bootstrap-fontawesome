// deps
// externals
import * as React from "react";
// locals
import ModalBody from "./ModalBody";
import List from "../list/List";
// component
class ModalList extends React.PureComponent {
    // render
    render() {
        return React.createElement(ModalBody, { id: this.props.id, className: "p-0" + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(List, { flush: true }, this.props.children));
    }
}
// name
ModalList.displayName = "ModalList";
export default ModalList;
