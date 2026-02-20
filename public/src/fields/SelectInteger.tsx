// deps

    // externals
    import * as React from "react";

    // internals
    import {
        InvalidFeedBackRequired, InvalidFeedBackInteger
    } from "./FieldFeedBacks";
    import InputLabel from "./InputLabel";

// types & interfaces

    // locals
    import type { iPropsField } from "../types";

// Props && States

    interface iPropsSelect extends iPropsField {
        "value": number;
        "onChange"?: (e: React.ChangeEvent<HTMLSelectElement>, newValue: number, oldValue: number) => void;
    }

    interface iPropsSelectLabel extends iPropsSelect {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

// component

export class SelectInteger extends React.PureComponent<iPropsSelect> {

    // name

    public static displayName: string = "SelectInteger";

    // events

    protected _handleChange (e: React.ChangeEvent<HTMLSelectElement>): void {

        if ("" === e.target.value.trim()) {

            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, 0, this.props.value);
            }

        }
        else {

            const value: number = parseInt(e.target.value, 10);

            if (value === this.props.value) {
                return;
            }

            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, value, this.props.value);
            }

        }

    }

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = !!this.props.disabled;
        const required: boolean = !!this.props.required;

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;

        const requiredValid: boolean = required ? isNumber && 0 < this.props.value : true;

        const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

        const valid: boolean = requiredValid && integerValid;

        // render
        return <select id={ this.props.id } name={ this.props.name }

            required={ required } aria-required={ required }

            className={
                "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : "")
            }
            style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }

            title={ this.props.label } aria-label={ this.props.label }

            value={ this.props.value }
            onChange={ this._handleChange.bind(this) }

        >
            { this.props.children }
        </select>;

    }

}

export class SelectIntegerLabel extends React.PureComponent<iPropsSelectLabel> {

    // name

    public static displayName: string = "SelectIntegerLabel";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;

        const requiredValid: boolean = required ? isNumber : true;

        const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

        const valid: boolean = requiredValid && integerValid;

        // render
        return <div className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <InputLabel for={ String(this.props.id) } label={ this.props.label }
                disabled={ disabled } required={ required } valid={ valid }
            />

            <SelectInteger id={ this.props.id }
                required={ required }
                disabled={ disabled }
                label={ this.props.label } value={ this.props.value }
                onChange={ this.props.onChange }

            >
                { this.props.children }
            </SelectInteger>

            { !requiredValid ? <InvalidFeedBackRequired /> : undefined }
            { requiredValid && !integerValid ? <InvalidFeedBackInteger /> : undefined }

        </div>;

    }

}
