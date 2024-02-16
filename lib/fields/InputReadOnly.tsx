"use strict";

// deps

    // externals
    import * as React from "react";

    // externals
    import { iPropsField } from "../types";
    import {
        InvalidFeedBackRequired
    } from "./FieldFeedBacks";

// Props && States

    export interface iPropsReadOnly extends iPropsField {
        "value"?: string | number;
    };

    interface iPropsInputReadOnlyLabel extends iPropsReadOnly {
        "label": string;
    };

// component

export class InputReadOnly extends React.PureComponent<iPropsReadOnly> {

    // name

    public static displayName: string = "InputReadOnly";

    // render

    public render (): JSX.Element {

        // props values
        const disabled: boolean = !!this.props.disabled;
        const required: boolean = !!this.props.required;

        // controls

        const requiredValid: boolean = required ? "" !== this.props.value : true;

        const valid: boolean = requiredValid;

        // render
        return <input id={ this.props.id } name={ this.props.name } type="text" readOnly

            required={ required } aria-required={ required }

            className={
                "form-control" +
                (this.props.className ? " " + this.props.className : "") +
                (disabled ? " disabled" : "") +
                (!valid ? " is-invalid" : "")
            } style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }

            title={ this.props.label } aria-label={ this.props.label }

            value={ this.props.value }

        />;

    }

};

export class InputReadOnlyLabel extends React.PureComponent<iPropsInputReadOnlyLabel> {

    // name

    public static displayName: string = "InputReadOnlyLabel";

    // render

    private _renderError (requiredValid: boolean): JSX.Element | null {

        if (!requiredValid) {
            return <InvalidFeedBackRequired />;
        }
        else {
            return null;
        }

    }

    public render (): JSX.Element {

        // props values
        const disabled: boolean = !!this.props.disabled;
        const required: boolean = !!this.props.required;

        // controls

        const requiredValid: boolean = required ? "" !== this.props.value : true;

        const valid: boolean = requiredValid;

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

            <InputReadOnly id={ this.props.id }
                required={ required } disabled={ disabled }
                label={ this.props.label }
                value={ this.props.value }
            />

            { this._renderError(requiredValid) }

        </div>;

    }

};
