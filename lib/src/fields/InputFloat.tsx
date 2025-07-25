"use strict";

// deps

    // externals
    import * as React from "react";

    // internals
    import {
        InvalidFeedBackFloat,
        InvalidFeedBackMin, InvalidFeedBackMax
    } from "./FieldFeedBacks";
    import InputLabel from "./InputLabel";

// types & interfaces

    // locals
    import type { iPropsInput } from "../types";

// Props && States

    export interface iPropsInputNumber extends iPropsInput {
        "value"?: number;
        "min"?: number;
        "max"?: number;
        "step"?: number;
        "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: number, oldValue: number) => void;
    }

    interface iPropsInputFloatLabel extends iPropsInputNumber {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

// component

export class InputFloat extends React.PureComponent<iPropsInputNumber> {

    // name

    public static displayName: string = "InputFloat";

    // events

    protected _handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

        if ("" === e.target.value.trim()) {

            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, 0, "undefined" !== typeof this.props.value ? this.props.value : 0);
            }

        }
        else {

            const value: number = parseFloat(e.target.value);

            if (value === this.props.value) {
                return;
            }

            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, value, "undefined" !== typeof this.props.value ? this.props.value : 0);
            }

        }

    }

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;

        const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value as number >= this.props.min : true;
        const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value as number <= this.props.max : true;

        const valid: boolean = isNumber && minValid && maxValid;

        // render
        return <input id={ this.props.id } name={ this.props.name } type="number"

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

            value={ this.props.value }
            min={ this.props.min } max={ this.props.max } step={ this.props.step ? this.props.step : 0.1 }
            onChange={ this._handleChange.bind(this) }

            onKeyDown={ this.props.onKeyDown }

        />;

    }

}

export class InputFloatLabel extends React.PureComponent<iPropsInputFloatLabel> {

    // name

    public static displayName: string = "InputFloatLabel";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;

        const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value as number >= this.props.min : true;
        const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value as number <= this.props.max : true;

        const valid: boolean = isNumber && minValid && maxValid;

        // render
        return <div className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <InputLabel for={ String(this.props.id) } label={ this.props.label }
                disabled={ disabled } required={ required } valid={ valid }
            />

            <InputFloat id={ this.props.id } name={ this.props.name }

                _ref={ this.props._ref }

                required={ required } disabled={ disabled }
                placeholder={ this.props.placeholder } label={ this.props.label }
                value={ this.props.value }
                min={ this.props.min } max={ this.props.max } step={ this.props.step }
                onChange={ this.props.onChange }

                onKeyDown={ this.props.onKeyDown }

            />

            { !isNumber ? <InvalidFeedBackFloat /> : undefined }
            { isNumber && !minValid ? <InvalidFeedBackMin min={ this.props.min as number } current={ this.props.value as number } /> : undefined }
            { isNumber && !maxValid ? <InvalidFeedBackMax max={ this.props.max as number } current={ this.props.value as number } /> : undefined }

        </div>;

    }

}
