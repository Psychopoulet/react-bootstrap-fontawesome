"use strict";
// deps
// externals
import * as React from "react";
// component
export class InvalidFeedBack extends React.PureComponent {
    // render
    render() {
        return React.createElement("small", { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style }, this.props.alert);
    }
}
// name
InvalidFeedBack.displayName = "InvalidFeedBack";
export class InvalidFeedBackRequired extends React.PureComponent {
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content required" });
    }
}
// name
InvalidFeedBackRequired.displayName = "InvalidFeedBackRequired";
export class InvalidFeedBackFloat extends React.PureComponent {
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be an float" });
    }
}
// name
InvalidFeedBackFloat.displayName = "InvalidFeedBackFloat";
export class InvalidFeedBackInteger extends React.PureComponent {
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be an integer" });
    }
}
// name
InvalidFeedBackInteger.displayName = "InvalidFeedBackInteger";
export class InvalidFeedBackMin extends React.PureComponent {
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")" });
    }
}
// name
InvalidFeedBackMin.displayName = "InvalidFeedBackMin";
export class InvalidFeedBackMax extends React.PureComponent {
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")" });
    }
}
// name
InvalidFeedBackMax.displayName = "InvalidFeedBackMax";
export class InvalidFeedBackMinLength extends React.PureComponent {
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content length must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")" });
    }
}
// name
InvalidFeedBackMinLength.displayName = "InvalidFeedBackMinLength";
export class InvalidFeedBackMaxLength extends React.PureComponent {
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content length must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")" });
    }
}
// name
InvalidFeedBackMaxLength.displayName = "InvalidFeedBackMaxLength";
