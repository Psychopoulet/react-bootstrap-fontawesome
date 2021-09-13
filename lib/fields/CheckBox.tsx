"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsField } from "../types";

// Props && States

	interface iPropsCheckBox extends iPropsField {
		"checked"?: boolean;
		"onToogle"?: (e: React.ChangeEvent<HTMLInputElement>, newValue?: boolean, oldValue?: boolean) => void;
	};

	interface iPropsCheckBoxLabel extends iPropsCheckBox {
		"label": string;
	};

// component

export class CheckBox extends React.PureComponent<iPropsCheckBox> {

	// name

	public static displayName: string = "CheckBox";

	// constructor

	constructor (props: iPropsCheckBox) {

		super(props);

		// events handlers

		this.handleToogle = this.handleToogle.bind(this);

	}

	// events

	public handleToogle (e: React.ChangeEvent<HTMLInputElement>): void {

		const value: boolean = e.target.checked;

		if (value === this.props.checked) {
			return;
		}

		if ("function" === typeof this.props.onToogle) {
			this.props.onToogle(e, value, this.props.checked);
		}

	}

	// render

	public render (): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;
		const checked: boolean = !!this.props.checked;

		// render
		return <input id={ this.props.id } role="checkbox" type="checkbox"

			className={
				(this.props.className ? this.props.className : "") +
				(disabled ? " disabled" : "")
			}
			style={ this.props.style }
			disabled={ disabled } aria-disabled={ disabled }

			title={ this.props.label } aria-label={ this.props.label }

			checked={ checked } aria-checked={ checked  }
			onChange={ this.handleToogle }

		/>;

	}

};

export class CheckBoxLabel extends React.PureComponent<iPropsCheckBoxLabel> {

	// name

	public static displayName: string = "CheckBoxLabel";

	// render

	public render (): JSX.Element {

		// props values
		const disabled: boolean = !!this.props.disabled;
		const checked: boolean = !!this.props.checked;

		// render
		return <div className={
			"mb-3" +
			(this.props.className ? " " + this.props.className : "") +
			(disabled ? " text-muted" : "")
		} style={ this.props.style }>

			<div className="form-check">

				<label className="form-check-label" aria-label={ this.props.label }>

					<CheckBox id={ this.props.id }
						className="form-check-input" disabled={ disabled }
						label={ this.props.label }
						checked={ checked }
						onToogle={ this.props.onToogle }
					/>

					{ this.props.label }

				</label>

			</div>

		</div>;

	}

};
