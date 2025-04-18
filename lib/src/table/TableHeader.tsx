"use strict";

// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// component

export default class TableHeader extends React.PureComponent<iPropsNode> {

    // name

    public static displayName: string = "TableHeader";

    // render

    public render (): React.JSX.Element {

        return <thead id={ this.props.id } className={ this.props.className } style={ this.props.style }>
            { this.props.children }
        </thead>;

    }

}
