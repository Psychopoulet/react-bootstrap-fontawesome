// deps
// externals
import * as React from "react";
// internals
import InputLabel from "./InputLabel";
// component
export class InputFile extends React.PureComponent {
    // events
    _handleChange(e) {
        if (!e.target.files || !e.target.files.length) {
            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, null);
            }
        }
        else {
            const value = e.target.files[0];
            if (this.props.maxSize && value.size > this.props.maxSize) {
                if ("function" === typeof this.props.onChangeError) {
                    this.props.onChangeError(e, new Error("Incorrect file size"));
                }
            }
            else if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, value);
            }
        }
    }
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        // render
        return React.createElement("input", { id: this.props.id, name: this.props.name, type: "file", className: "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : ""), style: this.props.style, disabled: disabled, "aria-disabled": disabled, title: this.props.label, "aria-label": this.props.label, onChange: this._handleChange.bind(this) });
    }
}
// name
InputFile.displayName = "InputFile";
export class InputFileLabel extends React.PureComponent {
    // render
    render() {
        // props values
        const disabled = Boolean(this.props.disabled);
        const required = Boolean(this.props.required);
        // render
        return React.createElement("div", { className: ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
                + (this.props.className ? " " + this.props.className : ""), style: this.props.style },
            React.createElement(InputLabel, { for: String(this.props.id), label: this.props.label, disabled: disabled, required: required }),
            React.createElement(InputFile, { id: this.props.id, name: this.props.name, required: required, disabled: disabled, label: this.props.label, onChange: this.props.onChange, onChangeError: this.props.onChangeError }));
    }
}
// name
InputFileLabel.displayName = "InputFileLabel";
