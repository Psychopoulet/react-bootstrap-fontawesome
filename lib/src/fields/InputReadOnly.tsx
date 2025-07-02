"use strict";

// deps

    // externals
    import * as React from "react";

    // internals
    import {
        InvalidFeedBackRequired
    } from "./FieldFeedBacks";
    import InputLabel from "./InputLabel";

// types & interfaces

    // locals
    import type { iPropsField } from "../types";

// Props && States

    export interface iPropsReadOnly extends iPropsField {
        "value"?: string | number;
    }

    interface iPropsInputReadOnlyLabel extends iPropsReadOnly {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

// component

export class InputReadOnly extends React.PureComponent<iPropsReadOnly> {

    // name

    public static displayName: string = "InputReadOnly";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const requiredValid: boolean = required ? "" !== this.props.value : true;

        const valid: boolean = requiredValid;

        // render
        return <input id={ this.props.id } name={ this.props.name } type="text" readOnly

            required={ required } aria-required={ required }

            className={
                "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : "")
            } style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }

            title={ this.props.label } aria-label={ this.props.label }

            value={ this.props.value }

        />;

    }

}

export class InputReadOnlyLabel extends React.PureComponent<iPropsInputReadOnlyLabel> {

    // name

    public static displayName: string = "InputReadOnlyLabel";

    // render

    private _renderError (requiredValid: boolean): React.JSX.Element | undefined {

        if (!requiredValid) {
            return <InvalidFeedBackRequired />;
        }
        else {
            return undefined;
        }

    }

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const requiredValid: boolean = required ? "" !== this.props.value : true;

        const valid: boolean = requiredValid;

        // render
        return <div className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <InputLabel for={ String(this.props.id) } label={ this.props.label }
                disabled={ disabled } required={ required } valid={ valid }
            />

            <InputReadOnly id={ this.props.id }
                required={ required } disabled={ disabled }
                label={ this.props.label }
                value={ this.props.value }
            />

            { this._renderError(requiredValid) }

        </div>;

    }

}
