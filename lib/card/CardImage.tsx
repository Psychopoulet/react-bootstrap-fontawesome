"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode } from "../types";

// Props && States

	interface iPropsImage extends iPropsNode {
		"position"?: "top" | "bottom";
		"src": string;
		"onClick"?: (e?: React.MouseEvent<HTMLImageElement>) => void;
		"height"?: number;
		"width"?: number;
	};

// component

export default class CardImage extends React.PureComponent<iPropsImage> {

	// name

	public static displayName: string = "CardImage";

	// render

	public render (): JSX.Element {

		let className: string = this.props.position ? "card-img-" + this.props.position : "card-img-top";
		className += this.props.className ? " " + this.props.className : "";

		let style: { [key: string]: string } = this.props.style ? this.props.style : null;

		if ("function" === typeof this.props.onClick) {

			if (!style) {
				style = {};
			}

			style.cursor = "pointer";

		}

		return <img id={ this.props.id } src={ this.props.src } height={ this.props.height } width={ this.props.width }
			className={ className } style={ style }
			onClick={ this.props.onClick }
		/>;

	}

};
