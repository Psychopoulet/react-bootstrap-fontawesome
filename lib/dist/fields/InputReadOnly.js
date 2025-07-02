"use strict";
// deps
// externals
import * as React from "react";
// internals
import { InvalidFeedBackRequired } from "./FieldFeedBacks";
import InputLabel from "./InputLabel";
// component
export class InputReadOnly extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const requiredValid = required ? "" !== this.props.value : true;
        const valid = requiredValid;
        // render
        return React.createElement("input", { id: this.props.id, name: this.props.name, type: "text", readOnly: true, required: required, "aria-required": required, className: "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : ""), style: this.props.style, disabled: disabled, "aria-disabled": disabled, title: this.props.label, "aria-label": this.props.label, value: this.props.value });
    }
}
// name
InputReadOnly.displayName = "InputReadOnly";
export class InputReadOnlyLabel extends React.PureComponent {
    // render
    _renderError(requiredValid) {
        if (!requiredValid) {
            return React.createElement(InvalidFeedBackRequired, null);
        }
        else {
            return undefined;
        }
    }
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const requiredValid = required ? "" !== this.props.value : true;
        const valid = requiredValid;
        // render
        return React.createElement("div", { className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(InputLabel, { for: String(this.props.id), label: this.props.label, disabled: disabled, required: required, valid: valid }),
            React.createElement(InputReadOnly, { id: this.props.id, required: required, disabled: disabled, label: this.props.label, value: this.props.value }),
            this._renderError(requiredValid));
    }
}
// name
InputReadOnlyLabel.displayName = "InputReadOnlyLabel";
