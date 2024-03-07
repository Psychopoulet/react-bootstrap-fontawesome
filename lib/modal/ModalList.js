"use strict";
// deps
// externals
import * as React from "react";
// locals
import List from "../list/List";
// component
class ModalList extends React.PureComponent {
    // render
    render() {
        return React.createElement(List, { id: this.props.id, className: "m-0" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, flush: true }, this.props.children);
    }
}
// name
ModalList.displayName = "ModalList";
export default ModalList;
