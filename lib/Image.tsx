"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode } from "./types";

// Props && States

	export interface iPropsImage extends iPropsNode {
		"src": string;
		"alt"?: string;
		"height"?: number;
		"width"?: number;
		"onClick"?: (e: React.MouseEvent<HTMLImageElement>) => void;
		"onMouseEnter"?: (e: React.MouseEvent<HTMLImageElement>) => void;
		"onMouseLeave"?: (e: React.MouseEvent<HTMLImageElement>) => void;
	};

// component

export default class Image extends React.PureComponent<iPropsImage> {

	// name

	public static displayName: string = "Image";

	// render

	public render (): JSX.Element {

		let style: { [key: string]: string } = this.props.style ? { ...this.props.style } : {};

		if ("function" === typeof this.props.onClick) {
			style.cursor = "pointer";
		}

		return <img id={ this.props.id } src={ this.props.src } alt={ this.props.alt }
			className={ this.props.className } style={ style } height={ this.props.height } width={ this.props.width }
			onClick={ this.props.onClick } onMouseEnter={ this.props.onMouseEnter } onMouseLeave={ this.props.onMouseLeave }
		/>;

	}

};
