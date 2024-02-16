"use strict";

// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// component

export default class TableBody extends React.PureComponent<iPropsNode> {

    // name

    public static displayName: string = "TableBody";

    // render

    public render (): JSX.Element {

        return <tbody id={ this.props.id } className={ this.props.className } style={ this.props.style }>
            { this.props.children }
        </tbody>;

    }

}
