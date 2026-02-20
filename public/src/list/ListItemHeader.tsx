// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// component

export default class ListItemHeader extends React.PureComponent<iPropsNode> {

    // name

    public static displayName: string = "ListItemHeader";

    // render

    public render (): React.JSX.Element {

        let className: string = "list-group-item-heading";

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <h4 id={ this.props.id } className={ className } style={ this.props.style } >
            { this.props.children }
        </h4>;

    }

}
