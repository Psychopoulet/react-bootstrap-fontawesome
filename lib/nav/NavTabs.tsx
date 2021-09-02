"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode } from "../types";
	import NavItem from "./NavItem";

// Props && States

	export interface iPropsNavTabs extends iPropsNode {
		"items"?: Array<string>;
		"selectedIndex"?: number;
		"justified"?: boolean;
		"pills"?: boolean;
		"onSelect"?: (e: React.MouseEvent<HTMLAnchorElement>, newIndex?: number) => void;
	};

	interface iStatesNavTabs {
		"selectedIndex": number;
	};

// component

export default class NavTabs extends React.Component<iPropsNavTabs, iStatesNavTabs> {

	// name

	public static displayName: string = "NavTabs";

	// constructor

	constructor (props: iPropsNavTabs) {

		super(props);

		// states

		this.state = {
			"selectedIndex": "number" === typeof this.props.selectedIndex ? this.props.selectedIndex : 0
		};

		// events handlers

		this.handleSelect = this.handleSelect.bind(this);

	}

	// events

	public handleSelect (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number): void {

		let newSecuredIndex: number;

		if (this.props.items) {

			if (newIndex >= this.props.items.length) {
				newSecuredIndex = this.props.items.length - 1;
			}
			else if (newIndex < 0) {
				newSecuredIndex = 0;
			}
			else {
				newSecuredIndex = newIndex;
			}

		}
		else {
			newSecuredIndex = newIndex;
		}

		this.setState({
			"selectedIndex": newSecuredIndex
		});

		if ("function" === typeof this.props.onSelect) {
			this.props.onSelect(e, newSecuredIndex);
		}
		else {

			e.preventDefault();
			e.stopPropagation();

		}

	}

	// render

	public render (): JSX.Element {

		let className: string = "nav";

		if (!!this.props.pills) {
			className += " nav-pills";
		}
		else {
			className += " nav-tabs";
		}

		if (!!this.props.justified) {
			className += " nav-justified";
		}

		if (this.props.className) {
			className += " " + this.props.className;
		}

		return <div id={ this.props.id } role="tablist" className={ className } style={ this.props.style }>

			{

				this.props.items ? this.props.items.map((title: string, key: number): JSX.Element => {

					return <NavItem key={ key } index={ key }
						active={ this.state.selectedIndex === key } disabled={ this.state.selectedIndex === key }
						onClick={ this.handleSelect }
					>
						{ title }
					</NavItem>;

				}) : null

			}

			{
				React.Children.toArray(this.props.children).filter((child: any): boolean => {
					return NavItem === child.type;
				})
			}

		</div>;

	}

};
