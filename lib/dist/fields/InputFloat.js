"use strict";
// deps
// externals
import * as React from "react";
// externals
import { InvalidFeedBackFloat, InvalidFeedBackMin, InvalidFeedBackMax } from "./FieldFeedBacks";
// component
export class InputFloat extends React.PureComponent {
    // events
    _handleChange(e) {
        if ("" === e.target.value.trim()) {
            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, 0, "undefined" !== typeof this.props.value ? this.props.value : 0);
            }
        }
        else {
            const value = parseFloat(e.target.value);
            if (value === this.props.value) {
                return;
            }
            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, value, "undefined" !== typeof this.props.value ? this.props.value : 0);
            }
        }
    }
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const isNumber = "number" === typeof this.props.value;
        const minValid = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
        const maxValid = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;
        const valid = isNumber && minValid && maxValid;
        // render
        return React.createElement("input", { id: this.props.id, name: this.props.name, type: "number", ref: this.props._ref, className: "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : ""), style: this.props.style, disabled: disabled, "aria-disabled": disabled, required: required, "aria-required": required, placeholder: this.props.placeholder, title: this.props.label, "aria-label": this.props.label, value: this.props.value, min: this.props.min, max: this.props.max, step: this.props.step ? this.props.step : 0.1, onChange: this._handleChange.bind(this), onKeyDown: this.props.onKeyDown });
    }
}
// name
InputFloat.displayName = "InputFloat";
export class InputFloatLabel extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const isNumber = "number" === typeof this.props.value;
        const minValid = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
        const maxValid = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;
        const valid = isNumber && minValid && maxValid;
        // render
        return React.createElement("div", { className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement("label", { htmlFor: this.props.id, className: disabled
                    ? "text-muted"
                    : !valid ? "text-danger" : undefined, "aria-label": this.props.label },
                this.props.label,
                " ",
                required
                    ? React.createElement("small", { className: "fa fa-asterisk text-danger", style: { "fontSize": "60%" }, "aria-hidden": "true" })
                    : undefined),
            React.createElement(InputFloat, { id: this.props.id, name: this.props.name, _ref: this.props._ref, required: required, disabled: disabled, placeholder: this.props.placeholder, label: this.props.label, value: this.props.value, min: this.props.min, max: this.props.max, step: this.props.step, onChange: this.props.onChange, onKeyDown: this.props.onKeyDown }),
            !isNumber ? React.createElement(InvalidFeedBackFloat, null) : undefined,
            isNumber && !minValid ? React.createElement(InvalidFeedBackMin, { min: this.props.min, current: this.props.value }) : undefined,
            isNumber && !maxValid ? React.createElement(InvalidFeedBackMax, { max: this.props.max, current: this.props.value }) : undefined);
    }
}
// name
InputFloatLabel.displayName = "InputFloatLabel";
