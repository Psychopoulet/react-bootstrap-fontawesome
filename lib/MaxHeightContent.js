"use strict";
// deps
// externals
import * as React from "react";
// component
class MaxHeightContent extends React.PureComponent {
    // render
    render() {
        const style = {
            "overflow": "auto"
        };
        if (this.props.heightPX) {
            style.height = this.props.heightPX + "px";
        }
        if (this.props.maxHeightPX) {
            style.maxHeight = this.props.maxHeightPX + "px";
        }
        return React.createElement("div", { className: this.props.className, style: style }, this.props.children);
    }
}
// name
MaxHeightContent.displayName = "MaxHeightContent";
export default MaxHeightContent;
