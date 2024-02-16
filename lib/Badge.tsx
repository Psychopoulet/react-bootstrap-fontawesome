"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { iPropsNode, tVariant } from "./types";
    import Icon, { tICon } from "./Icon";

// Props && States

    export interface iPropsBadge extends iPropsNode {
        "variant"?: tVariant;
        "pill"?: boolean;
        "icon"?: tICon;
        "title"?: string;
    };

// component

export default class Badge extends React.PureComponent<iPropsBadge> {

    // name

    public static displayName: string = "Badge";

    // render

    public render (): JSX.Element {

        let className: string = "badge";

        if (this.props.variant) {
            className += " bg-" + this.props.variant;
        }
        else {
            className += " text-body";
        }

        if (!!this.props.pill) {
            className += " rounded-pill";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <span id={ this.props.id } title={ this.props.title } className={ className } style={ this.props.style }>
            { this.props.icon ? <Icon type={ this.props.icon } child></Icon> : null }
            { this.props.children }
        </span>;

    }

};
