// deps
// externals
import * as React from "react";
// component
export class InvalidFeedBack extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBack";
    // render
    render() {
        return React.createElement("small", { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style }, this.props.alert);
    }
}
export class InvalidFeedBackRequired extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBackRequired";
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content required" });
    }
}
export class InvalidFeedBackFloat extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBackFloat";
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be an float" });
    }
}
export class InvalidFeedBackInteger extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBackInteger";
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be an integer" });
    }
}
export class InvalidFeedBackMin extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBackMin";
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")" });
    }
}
export class InvalidFeedBackMax extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBackMax";
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")" });
    }
}
export class InvalidFeedBackMinLength extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBackMinLength";
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content length must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")" });
    }
}
export class InvalidFeedBackMaxLength extends React.PureComponent {
    // name
    static displayName = "InvalidFeedBackMaxLength";
    // render
    render() {
        return React.createElement(InvalidFeedBack, { id: this.props.id, className: "form-text text-danger" + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style, alert: "Content length must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")" });
    }
}
