"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import Icon, { type tIcon } from "./Icon";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant } from "./types";

// Props && States

    export interface iPropsBadge extends iPropsNode {
        "variant"?: tVariant;
        "pill"?: boolean;
        "icon"?: tIcon;
        "title"?: string;
    }

// component

export default class Badge extends React.PureComponent<iPropsBadge> {

    // name

    public static displayName: string = "Badge";

    // render

    public render (): React.JSX.Element {

        let className: string = "badge";

        if (this.props.variant) {
            className += " bg-" + this.props.variant;
        }
        else {
            className += " text-body";
        }

        if (Boolean(this.props.pill)) {
            className += " rounded-pill";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <span id={ this.props.id } title={ this.props.title } className={ className } style={ this.props.style }>
            { this.props.icon ? <Icon type={ this.props.icon } child></Icon> : undefined }
            { this.props.children }
        </span>;

    }

}
