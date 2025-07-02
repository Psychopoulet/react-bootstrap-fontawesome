"use strict";

// deps

    // externals
    import * as React from "react";

    // internals
    import {
        InvalidFeedBackInteger,
        InvalidFeedBackMin, InvalidFeedBackMax
    } from "./FieldFeedBacks";
    import InputLabel from "./InputLabel";

// types & interfaces

    // locals
    import type { iPropsInput } from "../types";

// Props && States

    export interface iPropsRange extends iPropsInput {
        "value"?: number;
        "unit"?: string;
        "min"?: number;
        "max"?: number;
        "step"?: number;
        "onChange"?: (e: React.MouseEvent<HTMLInputElement>, newValue: number, oldValue: number) => void;
    }

    interface iPropsRangeLabel extends iPropsRange {
        "label": string;
        "value": number;
        "margin-bottom"?: number; // to be able to remove the default one
    }

    interface iStateRange{
        "value": number;
    }

// component

export class Range extends React.PureComponent<iPropsRange, iStateRange> {

    // name

    public static displayName: string = "Range";

    // constructor

    public constructor (props: iPropsRange) {

        super(props);

        // states

        this.state = {
            "value": "number" === typeof this.props.value ? this.props.value : 0
        };

    }

    public UNSAFE_componentWillReceiveProps (nextProps: iPropsRange): void {

        if (nextProps.value !== this.state.value) {

            this.setState({
                "value": nextProps.value as number
            });

        }

    }

    // events

    protected _handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

        const value: number = "" === e.target.value.trim() ? 0 : parseInt(e.target.value, 10);

        if (value === this.props.value) {
            return;
        }

        this.setState({
            "value": value
        });

    }

    protected _handleMouseUp (e: React.MouseEvent<HTMLInputElement>): void {

        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, this.state.value, "undefined" !== typeof this.props.value ? this.props.value : 0);
        }

    }

    // render

    private _render (className?: string): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;
        const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

        const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value as number >= this.props.min : true;
        const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value as number <= this.props.max : true;

        const valid: boolean = integerValid && minValid && maxValid;

        const style = this.props.style ? { ...this.props.style, "height": "2.4rem" } : { "height": "2.4rem" };

        return <input id={ this.props.id } name={ this.props.name } type="range"

            ref={ this.props._ref }

            className={
                "form-control form-range"
                + (className ? " " + className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : "")
            }
            style={ style }
            disabled={ disabled } aria-disabled={ disabled }
            required={ required } aria-required={ required }

            placeholder={ this.props.placeholder }
            title={ this.props.label } aria-label={ this.props.label }

            value={ this.state.value }
            min={ this.props.min } max={ this.props.max } step={ this.props.step ? this.props.step : 1 }
            onChange={ this._handleChange.bind(this) }
            onMouseUp={ this._handleMouseUp.bind(this) }

            onKeyDown={ this.props.onKeyDown }

        />;

    }

    public render (): React.JSX.Element {

        // render
        return !this.props.unit ? this._render(this.props.className) : <div className={ "input-group" + (this.props.className ? " " + this.props.className : "") }>

            { this._render() }

            <span className="input-group-text">{ this.props.value }{ this.props.unit }</span>

        </div>;

    }

}

export class RangeLabel extends React.PureComponent<iPropsRangeLabel> {

    // name

    public static displayName: string = "RangeLabel";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;
        const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

        const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
        const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;

        const valid: boolean = integerValid && minValid && maxValid;

        // render
        return <div className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <InputLabel for={ String(this.props.id) } label={ this.props.label }
                disabled={ disabled } required={ required } valid={ valid }
            />

            <Range id={ this.props.id } name={ this.props.name }

                _ref={ this.props._ref }

                required={ required } disabled={ disabled }

                placeholder={ this.props.placeholder } label={ this.props.label }

                value={ this.props.value }
                min={ this.props.min } max={ this.props.max }
                onChange={ this.props.onChange }

                onKeyDown={ this.props.onKeyDown }

            />

            { !integerValid ? <InvalidFeedBackInteger /> : undefined }
            { integerValid && !minValid ? <InvalidFeedBackMin min={ this.props.min as number } current={ this.props.value } /> : undefined }
            { integerValid && !maxValid ? <InvalidFeedBackMax max={ this.props.max as number } current={ this.props.value } /> : undefined }

        </div>;

    }

}
