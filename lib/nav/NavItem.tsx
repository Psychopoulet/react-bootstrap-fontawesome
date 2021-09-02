"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode } from "../types";

// Props && States

	interface iPropsNavItem extends iPropsNode {
		"index": number;
		"active"?: boolean;
		"disabled"?: boolean;
		"justify"?: boolean;
		"onClick"?: (e: React.MouseEvent<HTMLAnchorElement>, newIndex?: number) => void;
	};

// component

export default class NavItem extends React.PureComponent<iPropsNavItem> {

	// name

	public static displayName: string = "NavItem";

	// constructor

	constructor (props: iPropsNavItem) {

		super(props);

		// events handlers

		this.handleClick = this.handleClick.bind(this);

	}

	// events

	public handleClick (e: React.MouseEvent<HTMLAnchorElement>): void {

		if ("function" === typeof this.props.onClick) {
			this.props.onClick(e, this.props.index);
		}
		else {

			e.preventDefault();
			e.stopPropagation();

		}

	}

	// render

	public render (): JSX.Element {

		const disabled: boolean = !!this.props.disabled;

		let className: string = "nav-item";

		if (this.props.className) {
			className += " " + this.props.className;
		}

		let linkClassName: string = "nav-link";

		if (disabled) {
			linkClassName += " disabled";
		}

		if (!!this.props.active) {
			linkClassName += " active";
		}

		if (!!this.props.justify) {
			linkClassName += " d-flex justify-content-between";
		}

		return <div id={ this.props.id } className={ className } style={ this.props.style }>

			{

				disabled ? <span className={ linkClassName } role="presentation" aria-disabled={ disabled ? "true" : null } tabIndex={ disabled ? -1 : null }>
					{ this.props.children }
				</span> : <a href="#" className={ linkClassName } role="presentation" aria-disabled={ disabled ? "true" : null } tabIndex={ disabled ? -1 : null } onClick={ this.handleClick }>
					{ this.props.children }
				</a>

			}

		</div>;

	}

};
