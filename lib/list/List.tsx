"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode, tSize, tVariant } from "../types";
	import { ListContext } from "./ListContext";

// Props && States

	export interface iPropsList extends iPropsNode {
		"variant"?: tVariant;
		"flush"?: boolean;
		"horizontal"?: tSize;
	};

// component

export default class List extends React.PureComponent<iPropsList> {

	// name

	public static displayName: string = "List";

	// render

	public render (): JSX.Element {

		let className: string = "list-group";

		if (!!this.props.flush) {
			className += " list-group-flush";
		}

		if (this.props.horizontal) {

			switch (this.props.horizontal) {

				case "sm":
					className += " list-group-horizontal-sm";
				break;

				case "md":
					className += " list-group-horizontal-md";
				break;

				case "lg":
					className += " list-group-horizontal-lg";
				break;

				case "xl":
					className += " list-group-horizontal-xl";
				break;

				default:
					className += " list-group-horizontal";
				break;

			}

			className += " list-group-horizontal";
		}

		if (this.props.className) {
			className += " " + this.props.className;
		}

		return <ListContext.Provider value={ this.props.variant }>

			<div id={ this.props.id } role="tablist" className={ className } style={ this.props.style }>
				{ this.props.children }
			</div>

		</ListContext.Provider>;

	}

};
