"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { tVariant } from "../types";
	import { CardContext } from "./CardContext";
	import List, { iPropsList } from "../list/List";

// component

export default class CardList extends React.PureComponent<iPropsList> {

	// name

	public static displayName: string = "CardList";

	// render

	public render (): JSX.Element {

		return <CardContext.Consumer>

			{

				(variant: tVariant): JSX.Element => {

					return <List id={ this.props.id } variant={ this.props.variant || variant } className={ "m-0" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style }
						flush={ true }
					>
						{ this.props.children }
					</List>;

				}

			}


		</CardContext.Consumer>;

	}

};
