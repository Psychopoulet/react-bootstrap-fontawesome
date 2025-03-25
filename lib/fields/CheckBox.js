"use strict";
// deps
// externals
import * as React from "react";
// component
export class CheckBox extends React.PureComponent {
    // events
    _handleToogle(e) {
        const value = e.target.checked;
        if (value === this.props.checked) {
            return;
        }
        if ("function" === typeof this.props.onToogle) {
            this.props.onToogle(e, value, Boolean(this.props.checked));
        }
    }
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const checked = Boolean(this.props.checked);
        // render
        return React.createElement("input", { id: this.props.id, role: "checkbox", type: "checkbox", className: (this.props.className ? this.props.className : "")
                + (disabled ? " disabled" : ""), style: this.props.style, disabled: disabled, "aria-disabled": disabled, title: this.props.label, "aria-label": this.props.label, checked: checked, "aria-checked": checked, onChange: this._handleToogle.bind(this) });
    }
}
// name
CheckBox.displayName = "CheckBox";
export class CheckBoxLabel extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const checked = Boolean(this.props.checked);
        // render
        return React.createElement("div", { className: "mb-3"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " text-muted" : ""), style: this.props.style },
            React.createElement("div", { className: "form-check" },
                React.createElement("label", { className: "form-check-label", "aria-label": this.props.label },
                    React.createElement(CheckBox, { id: this.props.id, className: "form-check-input", disabled: disabled, label: this.props.label, checked: checked, onToogle: this.props.onToogle }),
                    this.props.label)));
    }
}
// name
CheckBoxLabel.displayName = "CheckBoxLabel";
export class CheckBoxPrettierLabel extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const checked = Boolean(this.props.checked);
        // render
        return React.createElement("label", { className: "mb-3"
                + (this.props.className ? "input-group " + this.props.className : "input-group")
                + (disabled ? " text-muted" : ""), style: this.props.style },
            React.createElement("span", { className: "input-group-text", "aria-label": this.props.label },
                React.createElement(CheckBox, { id: this.props.id, className: "form-check-input", disabled: disabled, label: this.props.label, checked: checked, onToogle: this.props.onToogle })),
            React.createElement("span", { className: "input-group-text" }, this.props.label));
    }
}
// name
CheckBoxPrettierLabel.displayName = "CheckBoxPrettierLabel";
