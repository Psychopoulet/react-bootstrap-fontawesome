"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsInput } from "../types";
	import Icon from "../Icon";
	import {
		InvalidFeedBack,
		InvalidFeedBackRequired,
		InvalidFeedBackMinLength, InvalidFeedBackMaxLength
	} from "./FieldFeedBacks";

// Props && States

	export interface iPropsInputColor extends iPropsInput {
		"value"?: string;
		"onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: string, oldValue: string) => void;
	};

	export interface iPropsInputColorLabel extends iPropsInputColor {
		"label": string;
	};

// component

export class InputColor extends React.PureComponent<iPropsInputColor> {

	// name

	public static displayName: string = "InputColor";

	// constructor

	public constructor (props: iPropsInputColor) {

		super(props);

		// events handlers

		this._handleChange = this._handleChange.bind(this);

	}

	// statics

	public static PATTERN: string = "^#[0-9a-f]{6}$";
	public static MIN: number = 7;
	public static MAX: number = 7;

	// events

	protected _handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

		const value: string = e.target.value;

		if (value === this.props.value) {
			return;
		}

		if ("function" === typeof this.props.onChange) {
			this.props.onChange(e, value, "undefined" !== typeof this.props.value ? this.props.value : "");
		}

	}

	// render

	private _render (): JSX.Element {

		const value: string = "string" === typeof this.props.value ? this.props.value : "";

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const requiredValid: boolean = required ? "" !== value : true;

		const minLengthValid: boolean = InputColor.MIN === value.length;
		const maxLengthValid: boolean = InputColor.MAX === value.length;

		const patternValid: boolean = new RegExp(InputColor.PATTERN).test(value);

		const valid: boolean = requiredValid && minLengthValid && maxLengthValid && patternValid;

		const style = this.props.style ? { ...this.props.style, "height": "2.4rem" } : { "height": "2.4rem" };

		return <input id={ this.props.id } name={ this.props.name } type="color"

			ref={ this.props._ref }

			className={
				"form-control" +
				(disabled ? " disabled" : "") +
				(!valid ? " is-invalid" : "")
			}
			style={ style }
			disabled={ disabled } aria-disabled={ disabled }
			required={ required } aria-required={ required }

			placeholder={ this.props.placeholder }
			title={ this.props.label } aria-label={ this.props.label }

			pattern={ InputColor.PATTERN }
			value={ this.props.value }
			minLength={ InputColor.MIN } maxLength={ InputColor.MAX }
			onChange={ this._handleChange }

			onKeyDown={ this.props.onKeyDown }

		/>;

	}

	public render (): JSX.Element {

		const value: string = "string" === typeof this.props.value ? this.props.value : "";

		// render
		return <div className={ "input-group" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style }>

			{ this._render() }

			<span className="input-group-text">

				<Icon type="circle" child style={{
					"color": value
				}} />

			</span>

		</div>;

	}

};

export class InputColorLabel extends React.PureComponent<iPropsInputColorLabel> {

	// name

	public static displayName: string = "InputColorLabel";

	// render

	private _renderError (requiredValid: boolean, minLengthValid: boolean, maxLengthValid: boolean, patternValid: boolean): JSX.Element | null {

		const value: string = "string" === typeof this.props.value ? this.props.value : "";

		if (!requiredValid) {
			return <InvalidFeedBackRequired />;
		}
		else if (!minLengthValid) {
			return <InvalidFeedBackMinLength min={ InputColor.MIN } current={ value.length } />;
		}
		else if (!maxLengthValid) {
			return <InvalidFeedBackMaxLength max={ InputColor.MAX } current={ value.length } />;
		}
		else if (!patternValid) {
			return <InvalidFeedBack alert={ "The value does not respect the pattern (" + InputColor.PATTERN + ")" } />;
		}
		else {
			return null;
		}

	}

	public render (): JSX.Element {

		const value: string = "string" === typeof this.props.value ? this.props.value : "";

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const requiredValid: boolean = required ? "" !== value : true;

		const minLengthValid: boolean = InputColor.MIN === value.length;
		const maxLengthValid: boolean = InputColor.MAX === value.length;

		const patternValid: boolean = new RegExp(InputColor.PATTERN).test(value);

		const valid: boolean = requiredValid && minLengthValid && maxLengthValid && patternValid;

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

			<InputColor id={ this.props.id } name={ this.props.name }

				_ref={ this.props._ref }

				required={ required } disabled={ disabled }

				placeholder={ this.props.placeholder } label={ this.props.label }

				value={ value }
				onChange={ this.props.onChange }

				onKeyDown={ this.props.onKeyDown }

			/>

			{ this._renderError(requiredValid, minLengthValid, maxLengthValid, patternValid) }

		</div>;

	}

};
