"use strict";
// deps
// externals
import * as React from "react";
// externals
import { InvalidFeedBackInteger, InvalidFeedBackMin, InvalidFeedBackMax } from "./FieldFeedBacks";
// component
export class Range extends React.PureComponent {
    // constructor
    constructor(props) {
        super(props);
        // states
        this.state = {
            "value": "number" === typeof this.props.value ? this.props.value : 0
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                "value": nextProps.value
            });
        }
    }
    // events
    _handleChange(e) {
        const value = "" === e.target.value.trim() ? 0 : parseInt(e.target.value, 10);
        if (value === this.props.value) {
            return;
        }
        this.setState({
            "value": value
        });
    }
    _handleMouseUp(e) {
        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, this.state.value, "undefined" !== typeof this.props.value ? this.props.value : 0);
        }
    }
    // render
    _render(className) {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const isNumber = "number" === typeof this.props.value;
        const integerValid = isNumber && Number.isInteger(this.props.value);
        const minValid = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
        const maxValid = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;
        const valid = integerValid && minValid && maxValid;
        const style = this.props.style ? Object.assign(Object.assign({}, this.props.style), { "height": "2.4rem" }) : { "height": "2.4rem" };
        return React.createElement("input", { id: this.props.id, name: this.props.name, type: "range", ref: this.props._ref, className: "form-control form-range"
                + (className ? " " + className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : ""), style: style, disabled: disabled, "aria-disabled": disabled, required: required, "aria-required": required, placeholder: this.props.placeholder, title: this.props.label, "aria-label": this.props.label, value: this.state.value, min: this.props.min, max: this.props.max, step: this.props.step ? this.props.step : 1, onChange: this._handleChange.bind(this), onMouseUp: this._handleMouseUp.bind(this), onKeyDown: this.props.onKeyDown });
    }
    render() {
        // render
        return !this.props.unit ? this._render(this.props.className) : React.createElement("div", { className: "input-group" + (this.props.className ? " " + this.props.className : "") },
            this._render(),
            React.createElement("span", { className: "input-group-text" },
                this.props.value,
                this.props.unit));
    }
}
// name
Range.displayName = "Range";
export class RangeLabel extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        const isNumber = "number" === typeof this.props.value;
        const integerValid = isNumber && Number.isInteger(this.props.value);
        const minValid = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
        const maxValid = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;
        const valid = integerValid && minValid && maxValid;
        // render
        return React.createElement("div", { className: "mb-3"
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement("label", { htmlFor: this.props.id, className: disabled
                    ? "text-muted"
                    : !valid ? "text-danger" : undefined, "aria-label": this.props.label },
                this.props.label,
                " ",
                required
                    ? React.createElement("small", { className: "fa fa-asterisk text-danger", style: { "fontSize": "60%" }, "aria-hidden": "true" })
                    : undefined),
            React.createElement(Range, { id: this.props.id, name: this.props.name, _ref: this.props._ref, required: required, disabled: disabled, placeholder: this.props.placeholder, label: this.props.label, value: this.props.value, min: this.props.min, max: this.props.max, onChange: this.props.onChange, onKeyDown: this.props.onKeyDown }),
            !integerValid ? React.createElement(InvalidFeedBackInteger, null) : undefined,
            integerValid && !minValid ? React.createElement(InvalidFeedBackMin, { min: this.props.min, current: this.props.value }) : undefined,
            integerValid && !maxValid ? React.createElement(InvalidFeedBackMax, { max: this.props.max, current: this.props.value }) : undefined);
    }
}
// name
RangeLabel.displayName = "RangeLabel";
