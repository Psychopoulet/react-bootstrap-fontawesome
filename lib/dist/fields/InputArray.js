"use strict";
// deps
// externals
import * as React from "react";
// locals
import generateFocus from "../generateFocus";
import Card from "../card/Card";
import CardHeader from "../card/CardHeader";
import CardBody from "../card/CardBody";
import CardFooter from "../card/CardFooter";
import { InputText } from "./InputText";
import List from "../list/List";
import ListItemHeader from "../list/ListItemHeader";
import ListItem from "../list/ListItem";
import Button from "../Button";
import { InvalidFeedBackRequired } from "./FieldFeedBacks";
// component
export class InputArray extends React.PureComponent {
    // constructor
    constructor(props) {
        super(props);
        this._focus = generateFocus();
    }
    // events
    _handleAddLine(e) {
        const oldValues = "object" === typeof this.props.value && this.props.value instanceof Array ? this.props.value : [];
        const newValues = [
            ...oldValues,
            ""
        ];
        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, newValues, oldValues);
        }
        setTimeout(() => {
            this._focus.setFocus();
        }, 200);
    }
    // render
    render() {
        const values = "object" === typeof this.props.value && this.props.value instanceof Array ? this.props.value : [];
        // props values
        const disabled = Boolean(this.props.disabled);
        // render
        return React.createElement(List, { id: this.props.id, className: this.props.className, style: this.props.style },
            React.createElement(ListItemHeader, { className: 0 < values.length ? undefined : "m-0" },
                React.createElement(Button, { title: "New line", icon: "plus", variant: "success", block: true, onClick: this._handleAddLine.bind(this) }, "New line")),
            values.map((line, key) => {
                const _handleChangeLine = (e, newValue) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (undefined !== typeof values[key] && newValue !== values[key]) {
                        const lines = [...values];
                        lines[key] = newValue;
                        if ("function" === typeof this.props.onChange) {
                            this.props.onChange(e, lines, values);
                        }
                    }
                };
                const _handleDeleteLine = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (undefined !== typeof values[key]) {
                        const lines = [...values];
                        lines.splice(key, 1);
                        if ("function" === typeof this.props.onChange) {
                            this.props.onChange(e, lines, values);
                        }
                    }
                };
                return React.createElement(ListItem, { justify: true, key: key },
                    React.createElement(InputText, { _ref: key === values.length - 1 ? this._focus.ref : undefined, disabled: disabled, value: line, onChange: _handleChangeLine.bind(this) }),
                    React.createElement(Button, { title: "Delete item n°" + key, className: "ms-3", icon: "trash", variant: "danger", disabled: disabled, onClick: _handleDeleteLine.bind(this) }));
            }));
    }
}
// name
InputArray.displayName = "InputArray";
export class InputArrayLabel extends React.PureComponent {
    // render
    render() {
        const values = "object" === typeof this.props.value && this.props.value instanceof Array ? this.props.value : [];
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // controls
        let requiredValid = true;
        if (Boolean(this.props.emptyValidation)) {
            requiredValid = required ? 0 < values.length : true;
        }
        // render
        return React.createElement(Card, { id: this.props.id, className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(CardHeader, null,
                this.props.label,
                required
                    ? React.createElement("small", { className: "fa fa-asterisk text-danger", style: { "fontSize": "60%" }, "aria-hidden": "true" })
                    : undefined),
            React.createElement(CardBody, null,
                React.createElement(InputArray, { required: required, disabled: disabled, placeholder: this.props.placeholder, label: this.props.label, value: this.props.value, onChange: this.props.onChange })),
            !requiredValid
                ? React.createElement(CardFooter, null,
                    React.createElement(InvalidFeedBackRequired, null))
                : undefined);
    }
}
// name
InputArrayLabel.displayName = "iPropsInputArrayLabel";
