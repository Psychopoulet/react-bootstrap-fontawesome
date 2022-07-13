"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsField } from "../types";

// Props && States

	export interface iPropsInputFile extends iPropsField {
		"maxSize"?: number;
		"onChange"?: (e: React.ChangeEvent<HTMLInputElement>, file?: File | null) => void;
		"onChangeError"?: (e: React.ChangeEvent<HTMLInputElement>, error: Error) => void;
	};

	export interface iPropsInputFileLabel extends iPropsInputFile {
		"label": string;
	};

// component

export class InputFile extends React.PureComponent<iPropsInputFile> {

	// name

	public static displayName: string = "InputFile";

	// constructor

	constructor (props: iPropsInputFile) {

		super(props);

		// events handlers

		this.handleChange = this.handleChange.bind(this);

	}

	// events

	public handleChange (e: React.ChangeEvent<HTMLInputElement>): void {

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

	public render (): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;

		// render
		return <input id={ this.props.id } name={ this.props.name } type="file"

			className={
				"form-control" +
				(this.props.className ? " " + this.props.className : "") +
				(disabled ? " disabled" : "")
			}
			style={ this.props.style }
			disabled={ disabled } aria-disabled={ disabled }

			title={ this.props.label } aria-label={ this.props.label }

			onChange={ this.handleChange }

		/>;

	}

};

export class InputFileLabel extends React.PureComponent<iPropsInputFileLabel> {

	// name

	public static displayName: string = "InputFileLabel";

	// render

	public render (): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;
		const required: boolean = !!this.props.required;

		// render
		return <div className={
			"mb-3" +
			(this.props.className ? " " + this.props.className : "")
		} style={ this.props.style }>

			<label htmlFor={ this.props.id } className={
				disabled
					? "text-muted"
					: undefined
			} aria-label={ this.props.label }>

				{ this.props.label } {
					required
						? <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small>
						: null
				}

			</label>

			<InputFile id={ this.props.id } name={ this.props.name }

				required={ required } disabled={ disabled }

				label={ this.props.label }

				onChange={ this.props.onChange }
				onChangeError={ this.props.onChangeError }

			/>

		</div>;

	}

};
