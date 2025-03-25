"use strict";

// deps

    // externals
    import * as React from "react";

    // externals
    import { InvalidFeedBackRequired } from "./FieldFeedBacks";

// types & interfaces

    // locals
    import type { iPropsField } from "../types";

// Props && States

    interface iPropsSelect extends iPropsField {
        "value": string;
        "onChange"?: (e: React.ChangeEvent<HTMLSelectElement>, newValue: string, oldValue: string) => void;
    }

    interface iPropsSelectLabel extends iPropsSelect {
        "label": string;
    }

// component

export class Select extends React.PureComponent<iPropsSelect> {

    // name

    public static displayName: string = "Select";

    // events

    protected _handleChange (e: React.ChangeEvent<HTMLSelectElement>): void {

        const value: string = e.target.value;

        if (value === this.props.value) {
            return;
        }

        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, value, this.props.value);
        }

    }

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = !!this.props.disabled;
        const required: boolean = !!this.props.required;

        // controls

        const requiredValid: boolean = required ? "" !== this.props.value : true;

        // render
        return <select id={ this.props.id } name={ this.props.name }

            required={ required } aria-required={ required }

            className={
                "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!requiredValid ? " is-invalid" : "")
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

export class SelectLabel extends React.PureComponent<iPropsSelectLabel> {

    // name

    public static displayName: string = "SelectLabel";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const requiredValid: boolean = required ? "" !== this.props.value : true ;

        // render
        return <div className={
            "mb-3"
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <label htmlFor={ this.props.id } className={
                disabled
                    ? "text-muted"
                    : !requiredValid ? "text-danger" : undefined
            } aria-label={ this.props.label }>

                { this.props.label } {
                    required
                        ? <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small>
                        : undefined
                }

            </label>

            <Select id={ this.props.id }
                required={ required }
                disabled={ disabled }
                label={ this.props.label } value={ this.props.value }
                onChange={ this.props.onChange }

            >
                { this.props.children }
            </Select>

            { !requiredValid ? <InvalidFeedBackRequired /> : undefined }

        </div>;

    }

}
