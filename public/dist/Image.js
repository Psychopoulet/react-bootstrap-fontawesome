// deps
// externals
import * as React from "react";
// component
export default class Image extends React.PureComponent {
    // name
    static displayName = "Image";
    // render
    render() {
        const style = this.props.style ? { ...this.props.style } : {};
        if ("function" === typeof this.props.onClick) {
            style.cursor = "pointer";
        }
        return React.createElement("img", { id: this.props.id, src: this.props.src, alt: this.props.alt, className: this.props.className, style: style, height: this.props.height, width: this.props.width, crossOrigin: this.props.crossOrigin, onClick: this.props.onClick, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave });
    }
}
