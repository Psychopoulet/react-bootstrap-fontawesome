"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode } from "./types";
	import Button from "./Button";

// Props && States

	export interface iPropsButtonGroup extends iPropsNode {
		"label"?: string;
		"block"?: boolean;
	};

// component

export default class ButtonGroup extends React.PureComponent<iPropsButtonGroup> {

	// name

	public static displayName: string = "ButtonGroup";

	// constructor

	constructor (props: iPropsButtonGroup) {

		super(props);

	}

	// render

	public render (): JSX.Element {

		let className: string = "btn-group";

		if (this.props.className) {
			className += " " + this.props.className;
		}

		if (!!this.props.block) {
			className += " col-12";
		}

		return <div id={ this.props.id }
			role="button group" aria-label={ this.props.label }
			className={ className } style={ this.props.style }
		>

			{
				React.Children.toArray(this.props.children).filter((child: any): boolean => {
					return Button === child.type;
				})
			}

		</div>;

	}

};
