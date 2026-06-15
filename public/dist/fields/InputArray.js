// deps
// externals
import * as React from "react";
// locals
import generateFocus from "../generateFocus";
import Card from "../card/Card";
import CardHeader from "../card/CardHeader";
import CardBody from "../card/CardBody";
import CardFooter from "../card/CardFooter";
import List from "../list/List";
import ListItemHeader from "../list/ListItemHeader";
import { InputText } from "./InputText";
import Button from "../Button";
import InputArrayLine from "./utils/InputArrayLine";
import { InvalidFeedBackRequired } from "./FieldFeedBacks";
// private
function _normalizeValues(value) {
    return "object" === typeof value && value instanceof Array ? [...value] : [];
}
function _valuesEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
// component
export class InputArray extends React.Component {
    // name
    static displayName = "InputArray";
    // private
    _focus;
    // constructor
    constructor(props) {
        super(props);
        this._focus = generateFocus();
        this.state = {
            "values": _normalizeValues(props.value),
            "newLine": ""
        };
    }
    // lifecycle
    componentDidUpdate(prevProps) {
        const prevPropValues = _normalizeValues(prevProps.value);
        const nextPropValues = _normalizeValues(this.props.value);
        if (!_valuesEqual(prevPropValues, nextPropValues)) {
            this.setState({
                "values": nextPropValues
            });
        }
    }
    // events
    _handleChangeNewLine = (e, newValue) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            "newLine": newValue
        });
    };
    _handleAddLineWithEnter = (e) => {
        if ("Enter" === e.key) {
            this._handleAddLine(e);
        }
    };
    _handleAddLine = (e) => {
        const index = this.state.values.length;
        const newValue = this.state.newLine;
        const oldValues = [...this.state.values];
        const newValues = [...oldValues, newValue];
        this.setState({
            "values": newValues,
            "newLine": ""
        });
        if ("function" === typeof this.props.onAddLine) {
            this.props.onAddLine(e, index, newValue);
        }
        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, newValues, oldValues);
        }
        setTimeout(() => {
            this._focus.setFocus();
        }, 200);
    };
    _handleLineChange = (e, index, newValue) => {
        if ("undefined" === typeof this.state.values[index]) {
            return;
        }
        if (newValue !== this.state.values[index]) {
            const newValues = [...this.state.values];
            const oldValues = [...this.state.values];
            newValues[index] = newValue;
            this.setState({
                "values": newValues
            });
            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, newValues, oldValues);
            }
        }
    };
    _handleLineDelete = (e, index) => {
        if ("undefined" === typeof this.state.values[index]) {
            return;
        }
        const deletedValue = this.state.values[index];
        if ("function" === typeof this.props.onDeleteLine) {
            this.props.onDeleteLine(e, index, deletedValue);
        }
        const lines = [...this.state.values];
        lines.splice(index, 1);
        this.setState({
            "values": lines
        });
        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, lines, [...this.state.values]);
        }
    };
    // render
    render() {
        const disabled = "boolean" === typeof this.props.disabled && this.props.disabled;
        return React.createElement(List, { id: this.props.id, className: this.props.className, style: this.props.style },
            React.createElement(ListItemHeader, { className: 0 < this.state.values.length ? undefined : "m-0", justify: true },
                React.createElement(InputText, { _ref: this._focus.ref, disabled: disabled, value: this.state.newLine, onChange: this._handleChangeNewLine, onKeyDown: this._handleAddLineWithEnter }),
                React.createElement(Button, { icon: "plus", variant: "success", size: "sm", className: "ms-3", disabled: disabled, onClick: this._handleAddLine })),
            this.state.values.map((line, index) => {
                return React.createElement(InputArrayLine, { key: index, index: index, value: line, disabled: disabled, onLineChange: this._handleLineChange, onLineDelete: this._handleLineDelete });
            }));
    }
}
export class InputArrayLabel extends React.PureComponent {
    // name
    static displayName = "InputArrayLabel";
    // render
    render() {
        const values = _normalizeValues(this.props.value);
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        let requiredValid = true;
        if ("boolean" === typeof this.props.emptyValidation && this.props.emptyValidation) {
            requiredValid = required ? 0 < values.length : true;
        }
        return React.createElement(Card, { id: this.props.id, className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(CardHeader, null,
                this.props.label,
                required && React.createElement("small", { className: "fa fa-asterisk text-danger", style: { "fontSize": "60%" }, "aria-hidden": "true" })),
            React.createElement(CardBody, null,
                React.createElement(InputArray, { required: required, disabled: disabled, placeholder: this.props.placeholder, label: this.props.label, value: this.props.value, onChange: this.props.onChange, onAddLine: this.props.onAddLine, onDeleteLine: this.props.onDeleteLine })),
            !requiredValid && React.createElement(CardFooter, null,
                React.createElement(InvalidFeedBackRequired, null)));
    }
}
