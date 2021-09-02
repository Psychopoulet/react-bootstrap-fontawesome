"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode, tSize } from "../types";
	import ListItem from "./ListItem";

// Props && States

	export interface iPropsList extends iPropsNode {
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

		return <div id={ this.props.id } role="tablist" className={ className } style={ this.props.style }>

			{
				React.Children.toArray(this.props.children).filter((child: any): boolean => {
					return ListItem === child.type;
				})
			}

		</div>;

	}

};
