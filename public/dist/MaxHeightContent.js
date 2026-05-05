// deps
// externals
import * as React from "react";
// component
export default class MaxHeightContent extends React.PureComponent {
    // name
    static displayName = "MaxHeightContent";
    // render
    render() {
        const style = {
            "overflow": "auto"
        };
        if ("number" === typeof this.props.heightPX) {
            style.height = this.props.heightPX + "px";
        }
        if ("number" === typeof this.props.maxHeightPX) {
            style.maxHeight = this.props.maxHeightPX + "px";
        }
        return React.createElement("div", { className: this.props.className, style: style }, this.props.children);
    }
}
