// deps
// externals
import * as React from "react";
// locals
import Image from "../Image";
// component
export default class ModalImage extends React.PureComponent {
    // name
    static displayName = "ModalImage";
    // render
    render() {
        let className = this.props.position ? "card-img-" + this.props.position : "card-img-top";
        className += this.props.className ? " " + this.props.className : "";
        return React.createElement(Image, { id: this.props.id, src: this.props.src, alt: this.props.alt, className: className, style: this.props.style, height: this.props.height, width: this.props.width, onClick: this.props.onClick, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave });
    }
}
