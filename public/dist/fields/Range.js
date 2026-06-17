// deps
// externals
import * as React from "react";
// internals
import { InvalidFeedBackInteger, InvalidFeedBackMin, InvalidFeedBackMax } from "./FieldFeedBacks";
import InputLabel from "./InputLabel";
// component
export class Range extends React.PureComponent {
    // name
    static displayName = "Range";
    // private
    _value = 0;
    // constructor
    constructor(props) {
        super(props);
        // states
        this.state = {
            "value": "number" === typeof this.props.value ? this.props.value : 0
        };
        this._value = "number" === typeof this.props.value ? this.props.value : 0;
    }
    componentDidUpdate(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                "value": nextProps.value
            });
        }
    }
    // events
    _handleChange = (e) => {
        const value = "" === e.target.value.trim() ? 0 : parseInt(e.target.value, 10);
        if (value === this.props.value) {
            return;
        }
        this.setState({
            "value": value
        }, () => {
            this._value = value;
        });
    };
    _handleMouseUp = (e) => {
        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, this._value, "undefined" !== typeof this.props.value ? this.props.value : 0);
        }
    };
    // render
    _renderInput(disabled, required, valid, className) {
        const style = {};
        if ("vertical" === this.props.orientation) {
            style.height = "2.4rem";
            style.writingMode = "vertical-lr";
            style.direction = "rtl";
            style.width = "16px";
            style.verticalAlign = "bottom";
        }
        else {
            style.height = "2.4rem";
        }
        return React.createElement("input", { id: this.props.id, name: this.props.name, type: "range", ref: this.props._ref, className: "form-control form-range"
                + ("string" === typeof className ? " " + className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : ""), style: this.props.style ? { ...style, ...this.props.style } : style, disabled: disabled, "aria-disabled": disabled, required: required, "aria-required": required, placeholder: this.props.placeholder, title: this.props.label, "aria-label": this.props.label, value: this._value, min: this.props.min, max: this.props.max, step: this.props.step ?? 1, onChange: this._handleChange, onMouseUp: this._handleMouseUp, onBlur: this.props.onBlur, onKeyDown: this.props.onKeyDown });
    }
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
        if (this.props.children) {
            return React.createElement("div", { className: "input-group" + ("string" === typeof this.props.className ? " " + this.props.className : "") },
                this._renderInput(disabled, required, valid),
                this.props.children);
        }
        return this._renderInput(disabled, required, valid, this.props.className);
    }
}
export class RangeLabel extends React.PureComponent {
    // name
    static displayName = "RangeLabel";
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
        return React.createElement("div", { className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(InputLabel, { for: String(this.props.id), label: this.props.label, disabled: disabled, required: required, valid: valid }),
            React.createElement(Range, { id: this.props.id, name: this.props.name, _ref: this.props._ref, required: required, disabled: disabled, placeholder: this.props.placeholder, label: this.props.label, value: this.props.value, min: this.props.min, max: this.props.max, onChange: this.props.onChange, onBlur: this.props.onBlur, onKeyDown: this.props.onKeyDown }, this.props.children),
            !integerValid && React.createElement(InvalidFeedBackInteger, null),
            integerValid && !minValid && React.createElement(InvalidFeedBackMin, { min: this.props.min, current: this.props.value }),
            integerValid && !maxValid && React.createElement(InvalidFeedBackMax, { max: this.props.max, current: this.props.value }));
    }
}
