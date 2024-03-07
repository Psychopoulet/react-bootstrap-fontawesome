"use strict";
// deps
// externals
import * as React from "react";
// externals
import { InvalidFeedBackRequired, InvalidFeedBackInteger } from "./FieldFeedBacks";
// component
export class SelectInteger extends React.PureComponent {
    // constructor
    constructor(props) {
        super(props);
        // events handlers
        this.handleChange = this.handleChange.bind(this);
    }
    // events
    handleChange(e) {
        if ("" === e.target.value.trim()) {
            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, 0, this.props.value);
            }
        }
        else {
            const value = parseInt(e.target.value, 10);
            if (value === this.props.value) {
                return;
            }
            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, value, this.props.value);
            }
        }
    }
    // render
    render() {
        // props values
        const disabled = !!this.props.disabled;
        const required = !!this.props.required;
        // controls
        const isNumber = "number" === typeof this.props.value;
        const requiredValid = required ? isNumber && 0 < this.props.value : true;
        const integerValid = isNumber && Number.isInteger(this.props.value);
        const valid = requiredValid && integerValid;
        // render
        return React.createElement("select", { id: this.props.id, name: this.props.name, required: required, "aria-required": required, className: "form-control" +
                (this.props.className ? " " + this.props.className : "") +
                (disabled ? " disabled" : "") +
                (!valid ? " is-invalid" : ""), style: this.props.style, disabled: disabled, "aria-disabled": disabled, title: this.props.label, "aria-label": this.props.label, value: this.props.value, onChange: this.handleChange }, this.props.children);
    }
}
// name
SelectInteger.displayName = "SelectInteger";
export class SelectIntegerLabel extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = !!this.props.disabled;
        const required = !!this.props.required;
        // controls
        const isNumber = "number" === typeof this.props.value;
        const requiredValid = required ? isNumber : true;
        const integerValid = isNumber && Number.isInteger(this.props.value);
        // render
        return React.createElement("div", { className: "mb-3" +
                (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement("label", { htmlFor: this.props.id, className: disabled ? " text-muted" : "", "aria-label": this.props.label }, this.props.label),
            React.createElement(SelectInteger, { id: this.props.id, required: required, disabled: disabled, label: this.props.label, value: this.props.value, onChange: this.props.onChange }, this.props.children),
            !requiredValid ? React.createElement(InvalidFeedBackRequired, null) : null,
            requiredValid && !integerValid ? React.createElement(InvalidFeedBackInteger, null) : null);
    }
}
// name
SelectIntegerLabel.displayName = "SelectIntegerLabel";
