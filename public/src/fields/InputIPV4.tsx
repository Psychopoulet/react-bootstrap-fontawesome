// deps

    // externals
    import * as React from "react";

    // internals
    import { InputText, InputTextLabel } from "./InputText";

// types & interfaces

    // locals
    import type { iPropsInput } from "../types";

// Props && States

    export interface iPropsInputIPV4 extends iPropsInput {
        "value"?: string;
        "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: string, oldValue: string) => void;
    }

    export interface iPropsInputIPV4Label extends iPropsInputIPV4 {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

// component

export class InputIPV4 extends React.PureComponent<iPropsInputIPV4> {

    // name

    public static displayName: string = "InputIPV4";

    // statics

    public static PATTERN: string = "^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$";
    public static MIN: number = 7;
    public static MAX: number = 15;

    // render

    public render (): React.JSX.Element {

        // props values
        const required: boolean = Boolean(this.props.required);
        const minLength: number | undefined = required ? InputIPV4.MIN : undefined;

        // render
        return <InputText id={ this.props.id } name={ this.props.name }

            _ref={ this.props._ref }

            className={ this.props.className } style={ this.props.style }
            disabled={ this.props.disabled } required={ required }

            placeholder={ this.props.placeholder }
            label={ this.props.label }

            pattern={ InputIPV4.PATTERN }
            value={ this.props.value }
            minLength={ minLength } maxLength={ InputIPV4.MAX }
            onChange={ this.props.onChange }

            onKeyDown={ this.props.onKeyDown }

        />;

    }

}

export class InputIPV4Label extends React.PureComponent<iPropsInputIPV4Label> {

    // name

    public static displayName: string = "InputIPV4Label";

    // render

    public render (): React.JSX.Element {

        // props values
        const required: boolean = Boolean(this.props.required);
        const minLength: number | undefined = required ? InputIPV4.MIN : undefined;

        // render
        return <InputTextLabel id={ this.props.id } name={ this.props.name }

            _ref={ this.props._ref }

            className={ this.props.className } style={ this.props.style } margin-bottom={ this.props["margin-bottom"] }
            disabled={ this.props.disabled } required={ required }

            placeholder={ this.props.placeholder }
            label={ this.props.label }

            pattern={ InputIPV4.PATTERN }
            value={ this.props.value }
            minLength={ minLength } maxLength={ InputIPV4.MAX }
            onChange={ this.props.onChange }

            onKeyDown={ this.props.onKeyDown }

        />;

    }

}
