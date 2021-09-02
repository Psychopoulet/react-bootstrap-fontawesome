"use strict";

// deps

	// externals
	import * as React from "react";

	// locals
	import { iPropsNode } from "../types";

// component

export default class TableHeader extends React.PureComponent<iPropsNode> {

	// name

	public static displayName: string = "TableHeader";

	// render

	public render (): JSX.Element {

		return <thead id={ this.props.id } className={ this.props.className } style={ this.props.style }>
			{ this.props.children }
		</thead>;

	}

};
