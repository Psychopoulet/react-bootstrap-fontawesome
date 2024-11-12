"use strict";
// deps
// externals
import * as React from "react";
// locals
import Image from "../Image";
// component
class ModalImage extends React.PureComponent {
    // render
    render() {
        let className = this.props.position ? "card-img-" + this.props.position : "card-img-top";
        className += this.props.className ? " " + this.props.className : "";
        return React.createElement(Image, { id: this.props.id, src: this.props.src, alt: this.props.alt, className: className, style: this.props.style, height: this.props.height, width: this.props.width, onClick: this.props.onClick, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave });
    }
}
// name
ModalImage.displayName = "ModalImage";
export default ModalImage;
