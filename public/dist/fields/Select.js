// deps
// externals
import * as React from "react";
// internals
import { InvalidFeedBackRequired } from "./FieldFeedBacks";
import InputLabel from "./InputLabel";
// component
export class Select extends React.PureComponent {
    // events
    _handleChange(e) {
        const value = e.target.value;
        if (value === this.props.value) {
            return;
        }
        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, value, this.props.value);
        }
    }
    // render
    render() {
        // props values
        const disabled = !!this.props.disabled;
        const required = !!this.props.required;
        // controls
        const requiredValid = required ? "" !== this.props.value : true;
        // render
        return React.createElement("select", { id: this.props.id, name: this.props.name, required: required, "aria-required": required, className: "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!requiredValid ? " is-invalid" : ""), style: this.props.style, disabled: disabled, "aria-disabled": disabled, title: this.props.label, "aria-label": this.props.label, value: this.props.value, onChange: this._handleChange.bind(this) }, this.props.children);
    }
}
// name
Select.displayName = "Select";
export class SelectLabel extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const requiredValid = required ? "" !== this.props.value : true;
        // render
        return React.createElement("div", { className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(InputLabel, { for: String(this.props.id), label: this.props.label, disabled: disabled, required: required }),
            React.createElement(Select, { id: this.props.id, required: required, disabled: disabled, label: this.props.label, value: this.props.value, onChange: this.props.onChange }, this.props.children),
            !requiredValid ? React.createElement(InvalidFeedBackRequired, null) : undefined);
    }
}
// name
SelectLabel.displayName = "SelectLabel";
