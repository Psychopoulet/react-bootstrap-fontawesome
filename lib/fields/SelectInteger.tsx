"use strict";

// deps

    // externals
    import * as React from "react";

    // externals
    import { iPropsField } from "../types";
    import {
        InvalidFeedBackRequired, InvalidFeedBackInteger
    } from "./FieldFeedBacks";

// Props && States

    interface iPropsSelect extends iPropsField {
        "value": number;
        "onChange"?: (e: React.ChangeEvent<HTMLSelectElement>, newValue: number, oldValue: number) => void;
    };

    interface iPropsSelectLabel extends iPropsSelect {
        "label": string;
    };

// component

export class SelectInteger extends React.PureComponent<iPropsSelect> {

    // name

    public static displayName: string = "SelectInteger";

    // constructor

    constructor (props: iPropsSelect) {

        super(props);

        // events handlers

        this.handleChange = this.handleChange.bind(this);

    }

    // events

    public handleChange (e: React.ChangeEvent<HTMLSelectElement>): void {

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

    public render (): JSX.Element {

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
                "form-control" +
                (this.props.className ? " " + this.props.className : "") +
                (disabled ? " disabled" : "") +
                (!valid ? " is-invalid" : "")
            }
            style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }

            title={ this.props.label } aria-label={ this.props.label }

            value={ this.props.value }
            onChange={ this.handleChange }

        >
            { this.props.children }
        </select>;

    }

};

export class SelectIntegerLabel extends React.PureComponent<iPropsSelectLabel> {

    // name

    public static displayName: string = "SelectIntegerLabel";

    // render

    public render (): JSX.Element {

        // props values
        const disabled: boolean = !!this.props.disabled;
        const required: boolean = !!this.props.required;

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;

        const requiredValid: boolean = required ? isNumber : true;

        const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

        // render
        return <div className={
            "mb-3" +
            (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <label htmlFor={ this.props.id } className={ disabled ? " text-muted" : "" } aria-label={ this.props.label }>
                { this.props.label }
            </label>

            <SelectInteger id={ this.props.id }
                required={ required }
                disabled={ disabled }
                label={ this.props.label } value={ this.props.value }
                onChange={ this.props.onChange }

            >
                { this.props.children }
            </SelectInteger>

            { !requiredValid ? <InvalidFeedBackRequired /> : null }
            { requiredValid && !integerValid ? <InvalidFeedBackInteger /> : null }

        </div>;

    }

};
