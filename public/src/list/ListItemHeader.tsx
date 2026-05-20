// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// Props && States

    interface iPropsListItemHeader extends iPropsNode {
        "justify"?: boolean;
    }

// component

export default class ListItemHeader extends React.PureComponent<iPropsListItemHeader> {

    // name

    public static displayName: string = "ListItemHeader";

    // render

    public render (): React.JSX.Element {

        let className: string = "list-group-item-heading";

        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }

        if ("boolean" === typeof this.props.justify && this.props.justify) {
            className += " d-flex justify-content-between align-items-center";
        }

        return <h4 id={ this.props.id } className={ className } style={ this.props.style } >
            { this.props.children }
        </h4>;

    }

}
