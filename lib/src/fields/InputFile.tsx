"use strict";

// deps

    // externals
    import * as React from "react";

    // internals
    import InputLabel from "./InputLabel";

// types & interfaces

    // locals
    import type { iPropsField } from "../types";

// Props && States

    export interface iPropsInputFile extends iPropsField {
        "maxSize"?: number;
        "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, file: File | null) => void;
        "onChangeError"?: (e: React.ChangeEvent<HTMLInputElement>, error: Error) => void;
    }

    export interface iPropsInputFileLabel extends iPropsInputFile {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

// component

export class InputFile extends React.PureComponent<iPropsInputFile> {

    // name

    public static displayName: string = "InputFile";

    // events

    protected _handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

        if (!e.target.files || !e.target.files.length) {

            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, null);
            }

        }
        else {

            const value: File = e.target.files[0];

            if (this.props.maxSize && value.size > this.props.maxSize) {

                if ("function" === typeof this.props.onChangeError) {
                    this.props.onChangeError(e, new Error("Incorrect file size"));
                }

            }
            else if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, value);
            }

        }

    }

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);

        // render
        return <input id={ this.props.id } name={ this.props.name } type="file"

            className={
                "form-control"
                + (this.props.className ? " " + this.props.className : "")
                + (disabled ? " disabled" : "")
            }
            style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }

            title={ this.props.label } aria-label={ this.props.label }

            onChange={ this._handleChange.bind(this) }

        />;

    }

}

export class InputFileLabel extends React.PureComponent<iPropsInputFileLabel> {

    // name

    public static displayName: string = "InputFileLabel";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // render
        return <div className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <InputLabel for={ String(this.props.id) } label={ this.props.label }
                disabled={ disabled } required={ required }
            />

            <InputFile id={ this.props.id } name={ this.props.name }

                required={ required } disabled={ disabled }

                label={ this.props.label }

                onChange={ this.props.onChange }
                onChangeError={ this.props.onChangeError }

            />

        </div>;

    }

}
