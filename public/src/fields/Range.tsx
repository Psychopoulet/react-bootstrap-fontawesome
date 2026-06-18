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
        "value": number;
        "min"?: number;
        "max"?: number;
        "step"?: number;
        "onChange"?: (e: React.MouseEvent<HTMLInputElement>, newValue: number, oldValue: number) => void;
        "orientation"?: "horizontal" | "vertical";
    }

    interface iPropsRangeLabel extends iPropsRange {
        "label": string;
        "value": number;
        "margin-bottom"?: number; // to be able to remove the default one
    }

    interface iStateRange {
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

    public componentDidUpdate (prevProps: iPropsRange): void {

        if (this.props.value !== prevProps.value) {

            this.setState({
                "value": this.props.value
            });

        }

    }

    // events

    protected readonly _handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>): void => {

        const value: number = "" === e.target.value.trim() ? 0 : parseInt(e.target.value, 10);

        if (value === this.props.value) {
            return;
        }

        this.setState({
            "value": value
        });

    };

    protected readonly _handleMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void = (e: React.MouseEvent<HTMLInputElement>): void => {

        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, this.state.value, "undefined" !== typeof this.props.value ? this.props.value : 0);
        }

    };

    // render

    private _renderInput (disabled: boolean, required: boolean, valid: boolean, className?: string): React.JSX.Element {

        const style: React.CSSProperties = {};

        if ("vertical" === this.props.orientation) {
            style.height = "2.4rem";
            style.writingMode = "vertical-lr";
            style.direction = "rtl";
            style.width = "16px";
            style.verticalAlign = "bottom";
        }
        else {
            style.height = "2.4rem";
        }

        return <input id={ this.props.id } name={ this.props.name } type="range"

            ref={ this.props._ref }

            className={
                "form-control form-range"
                + ("string" === typeof className ? " " + className : "")
                + (disabled ? " disabled" : "")
                + (!valid ? " is-invalid" : "")
            }
            style={ this.props.style ? { ...style, ...this.props.style } : style }
            disabled={ disabled } aria-disabled={ disabled }
            required={ required } aria-required={ required }

            placeholder={ this.props.placeholder }
            title={ this.props.label } aria-label={ this.props.label }

            value={ this.state.value }
            min={ this.props.min } max={ this.props.max } step={ this.props.step ?? 1 }
            onChange={ this._handleChange }
            onMouseUp={ this._handleMouseUp }

            onBlur={ this.props.onBlur }
            onKeyDown={ this.props.onKeyDown }

        />;

    }

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        const isNumber: boolean = "number" === typeof this.props.value;
        const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

        const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value as number >= this.props.min : true;
        const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value as number <= this.props.max : true;

        const valid: boolean = integerValid && minValid && maxValid;

        if (this.props.children) {

            return <div className={ "input-group" + ("string" === typeof this.props.className ? " " + this.props.className : "") }>

                { this._renderInput(disabled, required, valid) }

                { this.props.children }

            </div>;

        }

        return this._renderInput(disabled, required, valid, this.props.className);

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
            + ("string" === typeof this.props.className ? " " + this.props.className : "")
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

                onBlur={ this.props.onBlur }
                onKeyDown={ this.props.onKeyDown }

            >
                { this.props.children }
            </Range>

            { !integerValid && <InvalidFeedBackInteger /> }
            { integerValid && !minValid && <InvalidFeedBackMin min={ this.props.min as number } current={ this.props.value } /> }
            { integerValid && !maxValid && <InvalidFeedBackMax max={ this.props.max as number } current={ this.props.value } /> }

        </div>;

    }

}
