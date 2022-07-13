"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsInput } from "../types";
	import {
		InvalidFeedBackRequired,
		InvalidFeedBackMinLength, InvalidFeedBackMaxLength
	} from "./FieldFeedBacks";

// Props && States

	export interface iPropsTextArea extends iPropsInput {
		"rows"?: number;
		"value"?: string;
		"pattern"?: string;
		"minLength"?: number;
		"maxLength"?: number;
		"onChange"?: (e: React.ChangeEvent<HTMLTextAreaElement>, newValue: string, oldValue: string) => void;
	};

	interface iPropsTextAreaLabel extends iPropsTextArea {
		"label": string;
	};

// component

export class TextArea extends React.PureComponent<iPropsTextArea> {

	// name

	public static displayName: string = "TextArea";

	// constructor

	constructor (props: iPropsTextArea) {

		super(props);

		// events handlers

		this.handleChange = this.handleChange.bind(this);

	}

	// events

	public handleChange (e: React.ChangeEvent<HTMLTextAreaElement>): void {

		const value: string = e.target.value;

		if (value === this.props.value) {
			return;
		}

		if ("function" === typeof this.props.onChange) {
			this.props.onChange(e, value, "undefined" !== typeof this.props.value ? this.props.value : "");
		}

	}

	// render

	public render (): JSX.Element {

		const value: string = "string" === typeof this.props.value ? this.props.value : "";

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const requiredValid: boolean = required ? "" !== value : true;

		const minLengthValid: boolean = "number" === typeof this.props.minLength ? value.length >= this.props.minLength : true;
		const maxLengthValid: boolean = "number" === typeof this.props.maxLength ? value.length <= this.props.maxLength : true;

		const valid: boolean = requiredValid && minLengthValid && maxLengthValid;

		// render
		return <textarea id={ this.props.id }

			required={ required } aria-required={ required }

			className={
				"form-control" +
				(this.props.className ? " " + this.props.className : "") +
				(disabled ? " disabled" : "") +
				(!valid ? " is-invalid" : "")
			} rows={ this.props.rows } style={ this.props.style }
			disabled={ disabled } aria-disabled={ disabled }

			placeholder={ this.props.placeholder }
			title={ this.props.label } aria-label={ this.props.label }

			value={ this.props.value }
			minLength={ this.props.minLength } maxLength={ this.props.maxLength }
			onChange={ this.handleChange }

		></textarea>;

	}

};

export class TextAreaLabel extends React.PureComponent<iPropsTextAreaLabel> {

	// name

	public static displayName: string = "TextAreaLabel";

	// render

	public render (): JSX.Element {

		const value: string = "string" === typeof this.props.value ? this.props.value : "";

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const requiredValid: boolean = required ? "" !== value : true;

		const minLengthValid: boolean = "number" === typeof this.props.minLength ? value.length >= this.props.minLength : true;
		const maxLengthValid: boolean = "number" === typeof this.props.maxLength ? value.length <= this.props.maxLength : true;

		// render
		return <div className={
			"mb-3" +
			(this.props.className ? " " + this.props.className : "")
		} style={ this.props.style }>

			<label htmlFor={ this.props.id } className={ disabled ? " text-muted" : "" } aria-label={ this.props.label }>
				{ this.props.label }
			</label>

			<TextArea id={ this.props.id } name={ this.props.name } rows={ this.props.rows }

				_ref={ this.props._ref }

				required={ required } disabled={ disabled }

				placeholder={ this.props.placeholder } label={ this.props.label }

				value={ this.props.value }
				minLength={ this.props.minLength } maxLength={ this.props.maxLength }
				onChange={ this.props.onChange }

				onKeyDown={ this.props.onKeyDown }

			/>

			{ !requiredValid ? <InvalidFeedBackRequired /> : null }
			{ requiredValid && !minLengthValid ? <InvalidFeedBackMinLength min={ this.props.minLength as number } current={ value.length } /> : null }
			{ requiredValid && !maxLengthValid ? <InvalidFeedBackMaxLength max={ this.props.maxLength as number } current={ value.length } /> : null }

		</div>;

	}

};
