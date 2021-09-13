"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsInput } from "../types";
	import { InputText, InputTextLabel } from "./InputText";

// Props && States

	export interface iPropsInputIPV4 extends iPropsInput {
		"value"?: string;
		"onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue?: string, oldValue?: string) => void;
	};

	export interface iPropsInputIPV4Label extends iPropsInputIPV4 {
		"label": string;
	};

// component

export class InputIPV4 extends React.PureComponent<iPropsInputIPV4> {

	// name

	public static displayName: string = "InputIPV4";

	// statics

	public static PATTERN: string = "^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$";
	public static MIN: number = 7;
	public static MAX: number = 15;

	// render

	public render (): JSX.Element {

		// props values
		const required: boolean = !!this.props.required;
		const minLength: number | null = required ? InputIPV4.MIN : null;

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

};

export class InputIPV4Label extends React.PureComponent<iPropsInputIPV4Label> {

	// name

	public static displayName: string = "InputIPV4Label";

	// render

	public render (): JSX.Element {

		// props values
		const required: boolean = !!this.props.required;
		const minLength: number | null = required ? InputIPV4.MIN : null;

		// render
		return <InputTextLabel id={ this.props.id } name={ this.props.name }

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

};
