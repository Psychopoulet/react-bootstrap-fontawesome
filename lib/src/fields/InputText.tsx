"use strict";

// deps

    // externals
    import * as React from "react";

    // internals
    import {
        InvalidFeedBack,
        InvalidFeedBackRequired,
        InvalidFeedBackMinLength, InvalidFeedBackMaxLength
    } from "./FieldFeedBacks";
    import InputLabel from "./InputLabel";

// types & interfaces

    // locals
    import type { iPropsInput } from "../types";

// Props && States

    export interface iPropsInputText extends iPropsInput {
        "value"?: string;
        "pattern"?: string;
        "minLength"?: number;
        "maxLength"?: number;
        "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: string, oldValue: string) => void;
    }

    export interface iPropsInputTextLabel extends iPropsInputText {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

// component

export class InputText extends React.PureComponent<iPropsInputText> {

    // name

    public static displayName: string = "InputText";

    // events

    protected _handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

        const value: string = e.target.value;

        if (value === this.props.value) {
            return;
        }

        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, value, "undefined" !== typeof this.props.value ? this.props.value : "");
        }

    }

    // render

    public render (): React.JSX.Element {

        const value: string = "string" === typeof this.props.value ? this.props.value : "";

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        let requiredValid: boolean = true;
        let minLengthValid: boolean = true;
        let maxLengthValid: boolean = true;
        let patternValid: boolean = true;

        if ("" !== value || Boolean(this.props.emptyValidation)) {

            requiredValid = required ? "" !== this.props.value : true;

            minLengthValid = "number" === typeof this.props.minLength
                ? (!required && 0 === value.length) || value.length >= this.props.minLength
                : true;

            maxLengthValid = "number" === typeof this.props.maxLength ? value.length <= this.props.maxLength : true;

            patternValid = this.props.pattern ? new RegExp(this.props.pattern).test(value) : true;

        }

        const valid: boolean = requiredValid && minLengthValid && maxLengthValid && patternValid;

        // render
        return <input id={ this.props.id } name={ this.props.name } type="text"

            ref={ this.props._ref }

            className={
                "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : "")
            }
            style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }
            required={ required } aria-required={ required }

            placeholder={ this.props.placeholder }
            title={ this.props.label } aria-label={ this.props.label }

            pattern={ this.props.pattern }
            value={ this.props.value }
            minLength={ this.props.minLength } maxLength={ this.props.maxLength }
            onChange={ this._handleChange.bind(this) }

            onKeyDown={ this.props.onKeyDown }

        />;

    }

}

export class InputTextLabel extends React.PureComponent<iPropsInputTextLabel> {

    // name

    public static displayName: string = "InputTextLabel";

    // render

    private _renderError (requiredValid: boolean, minLengthValid: boolean, maxLengthValid: boolean, patternValid: boolean): React.JSX.Element | undefined {

        const value: string = "string" === typeof this.props.value ? this.props.value : "";

        if (!requiredValid) {
            return <InvalidFeedBackRequired />;
        }
        else if (!minLengthValid) {
            return <InvalidFeedBackMinLength min={ this.props.minLength as number } current={ value.length } />;
        }
        else if (!maxLengthValid) {
            return <InvalidFeedBackMaxLength max={ this.props.maxLength as number } current={ value.length } />;
        }
        else if (!patternValid) {
            return <InvalidFeedBack alert={ "The value does not respect the pattern (" + this.props.pattern + ")" } />;
        }
        else {
            return undefined;
        }

    }

    public render (): React.JSX.Element {

        const value: string = "string" === typeof this.props.value ? this.props.value : "";

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        let requiredValid: boolean = true;
        let minLengthValid: boolean = true;
        let maxLengthValid: boolean = true;
        let patternValid: boolean = true;

        if ("" !== value || !!this.props.emptyValidation) {

            requiredValid = required ? "" !== value : true;

            minLengthValid = "number" === typeof this.props.minLength
                ? (!required && 0 === value.length) || value.length >= this.props.minLength
                : true;

            maxLengthValid = "number" === typeof this.props.maxLength ? value.length <= this.props.maxLength : true;

            patternValid = this.props.pattern ? new RegExp(this.props.pattern).test(value) : true;

        }

        const valid: boolean = requiredValid && minLengthValid && maxLengthValid && patternValid;

        // render
        return <div className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <InputLabel for={ String(this.props.id) } label={ this.props.label }
                disabled={ disabled } required={ required } valid={ valid }
            />

            <InputText id={ this.props.id } name={ this.props.name }

                _ref={ this.props._ref }

                required={ required } disabled={ disabled }

                placeholder={ this.props.placeholder } label={ this.props.label }

                pattern={ this.props.pattern }
                value={ this.props.value }
                minLength={ this.props.minLength } maxLength={ this.props.maxLength }
                onChange={ this.props.onChange }

                onKeyDown={ this.props.onKeyDown }

            />

            { this._renderError(requiredValid, minLengthValid, maxLengthValid, patternValid) }

        </div>;

    }

}
