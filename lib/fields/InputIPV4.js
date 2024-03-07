"use strict";
// deps
// externals
import * as React from "react";
// externals
import { InputText, InputTextLabel } from "./InputText";
// component
export class InputIPV4 extends React.PureComponent {
    // render
    render() {
        // props values
        const required = !!this.props.required;
        const minLength = required ? InputIPV4.MIN : undefined;
        // render
        return React.createElement(InputText, { id: this.props.id, name: this.props.name, _ref: this.props._ref, className: this.props.className, style: this.props.style, disabled: this.props.disabled, required: required, placeholder: this.props.placeholder, label: this.props.label, pattern: InputIPV4.PATTERN, value: this.props.value, minLength: minLength, maxLength: InputIPV4.MAX, onChange: this.props.onChange, onKeyDown: this.props.onKeyDown });
    }
}
// name
InputIPV4.displayName = "InputIPV4";
// statics
InputIPV4.PATTERN = "^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$";
InputIPV4.MIN = 7;
InputIPV4.MAX = 15;
export class InputIPV4Label extends React.PureComponent {
    // render
    render() {
        // props values
        const required = !!this.props.required;
        const minLength = required ? InputIPV4.MIN : undefined;
        // render
        return React.createElement(InputTextLabel, { id: this.props.id, name: this.props.name, _ref: this.props._ref, className: this.props.className, style: this.props.style, disabled: this.props.disabled, required: required, placeholder: this.props.placeholder, label: this.props.label, pattern: InputIPV4.PATTERN, value: this.props.value, minLength: minLength, maxLength: InputIPV4.MAX, onChange: this.props.onChange, onKeyDown: this.props.onKeyDown });
    }
}
// name
InputIPV4Label.displayName = "InputIPV4Label";
