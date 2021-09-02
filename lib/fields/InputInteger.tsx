"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsInput } from "../types";
	import {
		InvalidFeedBackInteger,
		InvalidFeedBackMin, InvalidFeedBackMax
	} from "./FieldFeedBacks";

// Props && States

	export interface iPropsInputNumber extends iPropsInput {
		"value"?: number;
		"min"?: number;
		"max"?: number;
		"step"?: number;
		"onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue?: number, oldValue?: number) => void;
	};

	interface iPropsInputIntegerLabel extends iPropsInputNumber {
		"label": string;
	};

// component

export class InputInteger extends React.PureComponent<iPropsInputNumber> {

	// name

	public static displayName: string = "InputInteger";

	// constructor

	constructor (props: iPropsInputNumber) {

		super(props);

		// events handlers

		this.handleChange = this.handleChange.bind(this);

	}

	// events

	public handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

		if ("" === e.target.value.trim()) {
			this.props.onChange(e, 0, this.props.value);
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
		const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

		const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
		const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;

		const valid: boolean = integerValid && minValid && maxValid;

		// render
		return <input id={ this.props.id } name={ this.props.name } type="number"

			ref={ this.props._ref }

			className={
				"form-control" +
				(this.props.className ? " " + this.props.className : "") +
				(disabled ? " disabled" : "") +
				(!valid ? " is-invalid" : "")
			}
			style={ this.props.style }
			disabled={ disabled } aria-disabled={ disabled }
			required={ required } aria-required={ required }

			placeholder={ this.props.placeholder }
			title={ this.props.label } aria-label={ this.props.label }

			value={ this.props.value }
			min={ this.props.min } max={ this.props.max } step={ this.props.step ? this.props.step : 1 }
			onChange={ this.handleChange }

			onKeyDown={ this.props.onKeyDown }

		/>;

	}

};

export class InputIntegerLabel extends React.PureComponent<iPropsInputIntegerLabel> {

	// name

	public static displayName: string = "InputIntegerLabel";

	// render

	public render (): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const isNumber: boolean = "number" === typeof this.props.value;
		const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

		const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
		const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;

		const valid: boolean = integerValid && minValid && maxValid;

		// render
		return <div className={
			"mb-3" +
			(this.props.className ? " " + this.props.className : "")
		}>

			<label htmlFor={ this.props.id } className={
				disabled
					? "text-muted"
					: !valid ? "text-danger" : null
			} aria-label={ this.props.label }>

				{ this.props.label } {
					required
						? <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small>
						: null
				}

			</label>

			<InputInteger id={ this.props.id } name={ this.props.name }

				_ref={ this.props._ref }

				required={ required } disabled={ disabled }
				placeholder={ this.props.placeholder } label={ this.props.label }
				value={ this.props.value }
				min={ this.props.min } max={ this.props.max }
				onChange={ this.props.onChange }

				onKeyDown={ this.props.onKeyDown }

			/>

			{ !integerValid ? <InvalidFeedBackInteger /> : null }
			{ integerValid && !minValid ? <InvalidFeedBackMin min={ this.props.min } current={ this.props.value } /> : null }
			{ integerValid && !maxValid ? <InvalidFeedBackMax max={ this.props.max } current={ this.props.value } /> : null }

		</div>;

	}

};
