"use strict";

// deps

    // externals
    import * as React from "react";

    // internals
    import { InvalidFeedBackRequired } from "./FieldFeedBacks";
    import InputLabel from "./InputLabel";

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
        "margin-bottom"?: number; // to be able to remove the default one
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
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <InputLabel for={ String(this.props.id) } label={ this.props.label }
                disabled={ disabled } required={ required }
            />

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
