"use strict";
// deps
// externals
import * as React from "react";
// internals
import Icon from "../Icon";
import { InvalidFeedBack, InvalidFeedBackRequired, InvalidFeedBackMinLength, InvalidFeedBackMaxLength } from "./FieldFeedBacks";
import InputLabel from "./InputLabel";
// component
export class InputColor extends React.PureComponent {
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
    _render() {
        const value = "string" === typeof this.props.value ? this.props.value : "";
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const requiredValid = required ? "" !== value : true;
        const minLengthValid = InputColor.MIN === value.length;
        const maxLengthValid = InputColor.MAX === value.length;
        const patternValid = new RegExp(InputColor.PATTERN).test(value);
        const valid = requiredValid && minLengthValid && maxLengthValid && patternValid;
        const style = this.props.style ? Object.assign(Object.assign({}, this.props.style), { "height": "2.4rem" }) : { "height": "2.4rem" };
        return React.createElement("input", { id: this.props.id, name: this.props.name, type: "color", ref: this.props._ref, className: "form-control"
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : ""), style: style, disabled: disabled, "aria-disabled": disabled, required: required, "aria-required": required, placeholder: this.props.placeholder, title: this.props.label, "aria-label": this.props.label, pattern: InputColor.PATTERN, value: this.props.value, minLength: InputColor.MIN, maxLength: InputColor.MAX, onChange: this._handleChange.bind(this), onKeyDown: this.props.onKeyDown });
    }
    render() {
        const value = "string" === typeof this.props.value ? this.props.value : "";
        // render
        return React.createElement("div", { className: "input-group" + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            this._render(),
            React.createElement("span", { className: "input-group-text" },
                React.createElement(Icon, { type: "circle", child: true, style: {
                        "color": value
                    } })));
    }
}
// name
InputColor.displayName = "InputColor";
// statics
InputColor.PATTERN = "^#[0-9a-f]{6}$";
InputColor.MIN = 7;
InputColor.MAX = 7;
export class InputColorLabel extends React.PureComponent {
    // render
    _renderError(requiredValid, minLengthValid, maxLengthValid, patternValid) {
        const value = "string" === typeof this.props.value ? this.props.value : "";
        if (!requiredValid) {
            return React.createElement(InvalidFeedBackRequired, null);
        }
        else if (!minLengthValid) {
            return React.createElement(InvalidFeedBackMinLength, { min: InputColor.MIN, current: value.length });
        }
        else if (!maxLengthValid) {
            return React.createElement(InvalidFeedBackMaxLength, { max: InputColor.MAX, current: value.length });
        }
        else if (!patternValid) {
            return React.createElement(InvalidFeedBack, { alert: "The value does not respect the pattern (" + InputColor.PATTERN + ")" });
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
        const requiredValid = required ? "" !== value : true;
        const minLengthValid = InputColor.MIN === value.length;
        const maxLengthValid = InputColor.MAX === value.length;
        const patternValid = new RegExp(InputColor.PATTERN).test(value);
        const valid = requiredValid && minLengthValid && maxLengthValid && patternValid;
        // render
        return React.createElement("div", { className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(InputLabel, { for: String(this.props.id), label: this.props.label, disabled: disabled, required: required, valid: valid }),
            React.createElement(InputColor, { id: this.props.id, name: this.props.name, _ref: this.props._ref, required: required, disabled: disabled, placeholder: this.props.placeholder, label: this.props.label, value: value, onChange: this.props.onChange, onKeyDown: this.props.onKeyDown }),
            this._renderError(requiredValid, minLengthValid, maxLengthValid, patternValid));
    }
}
// name
InputColorLabel.displayName = "InputColorLabel";
