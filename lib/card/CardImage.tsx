"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode } from "../types";

// Props && States

	interface iPropsImage extends iPropsNode {
		"position"?: "top" | "bottom";
	};

// component

export default class CardImage extends React.PureComponent<iPropsImage> {

	// name

	public static displayName: string = "CardImage";

	// render

	public render (): JSX.Element {

		let className: string = this.props.position ? "card-img-" + this.props.position : "card-img-top";
		className += this.props.className ? " " + this.props.className : "";

		return <img id={ this.props.id } className={ className } style={ this.props.style } />;

	}

};
