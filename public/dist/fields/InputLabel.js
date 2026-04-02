// deps
// externals
import * as React from "react";
// component
export default class InputLabel extends React.PureComponent {
    // name
    static displayName = "InputLabel";
    // render
    render() {
        let className = "";
        if (Boolean(this.props.disabled)) {
            className += "text-muted";
        }
        else if ("boolean" === typeof this.props.valid && !this.props.valid) {
            className += "text-danger";
        }
        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("label", { id: this.props.id, className: className, style: this.props.style, htmlFor: this.props.for, "aria-label": this.props.label },
            this.props.label,
            " ",
            Boolean(this.props.required) && React.createElement("small", { className: "fa fa-asterisk text-danger", style: { "fontSize": "60%" }, "aria-hidden": "true" }));
    }
}
