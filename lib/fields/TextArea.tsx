"use strict";

// deps

    // externals
    import * as React from "react";

    // externals
    import {
        InvalidFeedBack,
        InvalidFeedBackRequired,
        InvalidFeedBackMinLength, InvalidFeedBackMaxLength
    } from "./FieldFeedBacks";

// types & interfaces

    // locals
    import type { iPropsInput } from "../types";

// Props && States

    export interface iPropsTextArea extends iPropsInput {
        "rows"?: number;
        "value"?: string;
        "pattern"?: string;
        "minLength"?: number;
        "maxLength"?: number;
        "onChange"?: (e: React.ChangeEvent<HTMLTextAreaElement>, newValue: string, oldValue: string) => void;
    }

    export interface iPropsTextAreaLabel extends iPropsTextArea {
        "label": string;
    }

// component

export class TextArea extends React.PureComponent<iPropsTextArea> {

    // name

    public static displayName: string = "TextArea";

    // constructor

    public constructor (props: iPropsTextArea) {

        super(props);

        // events handlers

        this.handleChange = this.handleChange.bind(this);

    }

    // events

    public handleChange (e: React.ChangeEvent<HTMLTextAreaElement>): void {

        const value: string = e.target.value;

        if (value === this.props.value) {
            return;
        }

        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, value, "undefined" !== typeof this.props.value ? this.props.value : "");
        }

    }

    // render

    public render (): JSX.Element {

        const value: string = "string" === typeof this.props.value ? this.props.value : "";

        // props values
        const disabled: boolean = !!this.props.disabled;
        const required: boolean = !!this.props.required;

        // controls

        let requiredValid: boolean = true;
        let minLengthValid: boolean = true;
        let maxLengthValid: boolean = true;
        let patternValid: boolean = true;

        if ("" !== value || !!this.props.emptyValidation) {

            requiredValid = required ? "" !== this.props.value : true;

            minLengthValid = "number" === typeof this.props.minLength
                ? (!required && 0 === value.length) || value.length >= this.props.minLength
                : true;

            maxLengthValid = "number" === typeof this.props.maxLength ? value.length <= this.props.maxLength : true;

            patternValid = this.props.pattern ? new RegExp(this.props.pattern).test(value) : true;

        }

        const valid: boolean = requiredValid && minLengthValid && maxLengthValid && patternValid;

        // render
        return <textarea id={ this.props.id } name={ this.props.name }

            className={
                "form-control" +
                (this.props.className ? " " + this.props.className : "") +
                (disabled ? " disabled" : "") +
                (!valid ? " is-invalid" : "")
            } rows={ this.props.rows } style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }
            required={ required } aria-required={ required }

            placeholder={ this.props.placeholder }
            title={ this.props.label } aria-label={ this.props.label }

            value={ this.props.value }
            minLength={ this.props.minLength } maxLength={ this.props.maxLength }
            onChange={ this.handleChange }

            onKeyDown={ this.props.onKeyDown }

        ></textarea>;

    }

}

export class TextAreaLabel extends React.PureComponent<iPropsTextAreaLabel> {

    // name

    public static displayName: string = "iPropsTextAreaLabel";

    // render

    private _renderError (requiredValid: boolean, minLengthValid: boolean, maxLengthValid: boolean, patternValid: boolean): JSX.Element | null {

        const value: string = "string" === typeof this.props.value ? this.props.value : "";

        if (!requiredValid) {
            return <InvalidFeedBackRequired />;
        }
        else if (!minLengthValid) {
            return <InvalidFeedBackMinLength min={ this.props.minLength as number } current={ value.length } />;
        }
        else if (!maxLengthValid) {
            return <InvalidFeedBackMaxLength max={ this.props.maxLength as number  } current={ value.length } />;
        }
        else if (!patternValid) {
            return <InvalidFeedBack alert={ "The value does not respect the pattern (" + this.props.pattern + ")" } />;
        }
        else {
            return null;
        }

    }

    public render (): JSX.Element {

        const value: string = "string" === typeof this.props.value ? this.props.value : "";

        // props values
        const disabled: boolean = !!this.props.disabled;
        const required: boolean = !!this.props.required;

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
            "mb-3" +
            (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <label htmlFor={ this.props.id } className={
                disabled
                    ? "text-muted"
                    : !valid ? "text-danger" : undefined
            } aria-label={ this.props.label }>

                { this.props.label } {
                    required
                        ? <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small>
                        : null
                }

            </label>

            <TextArea id={ this.props.id } name={ this.props.name }

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
