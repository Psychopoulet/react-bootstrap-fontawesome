"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsField } from "../types";
	import { InvalidFeedBackRequired } from "./FieldFeedBacks";

// Props && States

	interface iPropsSelect extends iPropsField {
		"value": string;
		"onChange"?: (e: React.ChangeEvent<HTMLSelectElement>, newValue?: string, oldValue?: string) => void;
	};

	interface iPropsSelectLabel extends iPropsSelect {
		"label": string;
	};

// component

export class Select extends React.PureComponent<iPropsSelect> {

	// name

	public static displayName: string = "Select";

	// constructor

	constructor (props: iPropsSelect) {

		super(props);

		// events handlers

		this.handleChange = this.handleChange.bind(this);

	}

	// events

	public handleChange (e: React.ChangeEvent<HTMLSelectElement>): void {

		const value: string = e.target.value;

		if (value === this.props.value) {
			return;
		}

		if ("function" === typeof this.props.onChange) {
			this.props.onChange(e, value, this.props.value);
		}

	}

	// render

	public render (): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const requiredValid: boolean = required ? "" !== this.props.value : true;

		// render
		return <select id={ this.props.id } name={ this.props.name }

			required={ required } aria-required={ required }

			className={
				"form-control" +
				(this.props.className ? " " + this.props.className : "") +
				(disabled ? " disabled" : "") +
				(!requiredValid ? " is-invalid" : "")
			}
			style={ this.props.style }
			disabled={ disabled } aria-disabled={ disabled }

			title={ this.props.label } aria-label={ this.props.label }

			value={ this.props.value }
			onChange={ this.handleChange }

		>
			{ this.props.children }
		</select>;

	}

};

export class SelectLabel extends React.PureComponent<iPropsSelectLabel> {

	// name

	public static displayName: string = "SelectLabel";

	// render

	public render (): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// controls

		const requiredValid: boolean = required ? "" !== this.props.value : true ;

		// render
		return <div className={
			"mb-3" +
			(this.props.className ? " " + this.props.className : "")
		} style={ this.props.style }>

			<label htmlFor={ this.props.id } className={
				disabled
					? "text-muted"
					: !requiredValid ? "text-danger" : undefined
			} aria-label={ this.props.label }>

				{ this.props.label } {
					required
						? <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small>
						: null
				}

			</label>

			<Select id={ this.props.id }
				required={ required }
				disabled={ disabled }
				label={ this.props.label } value={ this.props.value }
				onChange={ this.props.onChange }

			>
				{ this.props.children }
			</Select>

			{ !requiredValid ? <InvalidFeedBackRequired /> : null }

		</div>;

	}

};
