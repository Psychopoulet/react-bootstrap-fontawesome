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

	export interface iPropsRange extends iPropsInput {
		"value"?: number;
		"unit"?: string;
		"min"?: number;
		"max"?: number;
		"step"?: number;
		"onChange"?: (e: React.MouseEvent<HTMLInputElement>, newValue?: number, oldValue?: number) => void;
	};

	interface iPropsRangeLabel extends iPropsRange {
		"value": number;
	};

// component

export class Range extends React.PureComponent<iPropsRange, iPropsRangeLabel> {

	// name

	public static displayName: string = "Range";

	// constructor

	constructor (props: iPropsRange) {

		super(props);

		// states

		this.state = {
			"value": this.props.value
		};

		// events handlers

		this.handleChange = this.handleChange.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);

	}

	public UNSAFE_componentWillReceiveProps(nextProps: iPropsRange): void {

		if (nextProps.value !== this.state.value) {

			this.setState({
				"value": nextProps.value
			});

		}

	}

	// events

	public handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

		const value: number = "" === e.target.value.trim() ? 0 : parseInt(e.target.value, 10);

		if (value === this.props.value) {
			return;
		}

		this.setState({
			"value": value
		});

	}

	public handleMouseUp (e: React.MouseEvent<HTMLInputElement>): void {

		if ("function" === typeof this.props.onChange) {
			this.props.onChange(e, this.state.value, this.props.value);
		}

	}

	// render

	private _render (className?: string): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const isNumber: boolean = "number" === typeof this.props.value;
		const integerValid: boolean = isNumber && Number.isInteger(this.props.value);

		const minValid: boolean = "number" === typeof this.props.min && isNumber ? this.props.value >= this.props.min : true;
		const maxValid: boolean = "number" === typeof this.props.max && isNumber ? this.props.value <= this.props.max : true;

		const valid: boolean = integerValid && minValid && maxValid;

		const style = this.props.style ? { ...this.props.style, "height": "2.4rem" } : { "height": "2.4rem" };

		return <input id={ this.props.id } name={ this.props.name } type="range"

			ref={ this.props._ref }

			className={
				"form-control form-range" +
				(className ? " " + className : "") +
				(disabled ? " disabled" : "") +
				(!valid ? " is-invalid" : "")
			}
			style={ style }
			disabled={ disabled } aria-disabled={ disabled }
			required={ required } aria-required={ required }

			placeholder={ this.props.placeholder }
			title={ this.props.label } aria-label={ this.props.label }

			value={ this.state.value }
			min={ this.props.min } max={ this.props.max } step={ this.props.step ? this.props.step : 1 }
			onChange={ this.handleChange }
			onMouseUp={ this.handleMouseUp }

			onKeyDown={ this.props.onKeyDown }

		/>;

	}

	public render (): JSX.Element {

		// render
		return !this.props.unit ? this._render(this.props.className) : <div className={ "input-group" + (this.props.className ? " " + this.props.className : "") }>

			{ this._render() }

			<span className="input-group-text">{ this.props.value }{ this.props.unit }</span>

		</div>;

	}

};

export class RangeLabel extends React.PureComponent<iPropsRangeLabel> {

	// name

	public static displayName: string = "RangeLabel";

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

			<Range id={ this.props.id } name={ this.props.name }

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
