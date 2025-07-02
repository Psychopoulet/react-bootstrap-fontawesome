"use strict";
// deps
// externals
import * as React from "react";
// internals
import { InvalidFeedBack, InvalidFeedBackRequired, InvalidFeedBackMinLength, InvalidFeedBackMaxLength } from "./FieldFeedBacks";
import InputLabel from "./InputLabel";
// component
export class InputText extends React.PureComponent {
    // events
    _handleChange(e) {
        const value = e.target.value;
        if (value === this.props.value) {
            return;
        }
        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, value, "undefined" !== typeof this.props.value ? this.props.value : "");
        }
    }
    // render
    render() {
        const value = "string" === typeof this.props.value ? this.props.value : "";
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        let requiredValid = true;
        let minLengthValid = true;
        let maxLengthValid = true;
        let patternValid = true;
        if ("" !== value || Boolean(this.props.emptyValidation)) {
            requiredValid = required ? "" !== this.props.value : true;
            minLengthValid = "number" === typeof this.props.minLength
                ? (!required && 0 === value.length) || value.length >= this.props.minLength
                : true;
            maxLengthValid = "number" === typeof this.props.maxLength ? value.length <= this.props.maxLength : true;
            patternValid = this.props.pattern ? new RegExp(this.props.pattern).test(value) : true;
        }
        const valid = requiredValid && minLengthValid && maxLengthValid && patternValid;
        // render
        return React.createElement("input", { id: this.props.id, name: this.props.name, type: "text", ref: this.props._ref, className: "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : ""), style: this.props.style, disabled: disabled, "aria-disabled": disabled, required: required, "aria-required": required, placeholder: this.props.placeholder, title: this.props.label, "aria-label": this.props.label, pattern: this.props.pattern, value: this.props.value, minLength: this.props.minLength, maxLength: this.props.maxLength, onChange: this._handleChange.bind(this), onKeyDown: this.props.onKeyDown });
    }
}
// name
InputText.displayName = "InputText";
export class InputTextLabel extends React.PureComponent {
    // render
    _renderError(requiredValid, minLengthValid, maxLengthValid, patternValid) {
        const value = "string" === typeof this.props.value ? this.props.value : "";
        if (!requiredValid) {
            return React.createElement(InvalidFeedBackRequired, null);
        }
        else if (!minLengthValid) {
            return React.createElement(InvalidFeedBackMinLength, { min: this.props.minLength, current: value.length });
        }
        else if (!maxLengthValid) {
            return React.createElement(InvalidFeedBackMaxLength, { max: this.props.maxLength, current: value.length });
        }
        else if (!patternValid) {
            return React.createElement(InvalidFeedBack, { alert: "The value does not respect the pattern (" + this.props.pattern + ")" });
        }
        else {
            return undefined;
        }
    }
    render() {
        const value = "string" === typeof this.props.value ? this.props.value : "";
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        let requiredValid = true;
        let minLengthValid = true;
        let maxLengthValid = true;
        let patternValid = true;
        if ("" !== value || !!this.props.emptyValidation) {
            requiredValid = required ? "" !== value : true;
            minLengthValid = "number" === typeof this.props.minLength
                ? (!required && 0 === value.length) || value.length >= this.props.minLength
                : true;
            maxLengthValid = "number" === typeof this.props.maxLength ? value.length <= this.props.maxLength : true;
            patternValid = this.props.pattern ? new RegExp(this.props.pattern).test(value) : true;
        }
        const valid = requiredValid && minLengthValid && maxLengthValid && patternValid;
        // render
        return React.createElement("div", { className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(InputLabel, { for: String(this.props.id), label: this.props.label, disabled: disabled, required: required, valid: valid }),
            React.createElement(InputText, { id: this.props.id, name: this.props.name, _ref: this.props._ref, required: required, disabled: disabled, placeholder: this.props.placeholder, label: this.props.label, pattern: this.props.pattern, value: this.props.value, minLength: this.props.minLength, maxLength: this.props.maxLength, onChange: this.props.onChange, onKeyDown: this.props.onKeyDown }),
            this._renderError(requiredValid, minLengthValid, maxLengthValid, patternValid));
    }
}
// name
InputTextLabel.displayName = "InputTextLabel";
