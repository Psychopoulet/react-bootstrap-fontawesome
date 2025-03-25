"use strict";

// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// Props && States

    interface iPropsNavItem extends iPropsNode {
        "index": number;
        "active"?: boolean;
        "disabled"?: boolean;
        "justify"?: boolean;
        "onClick"?: (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number) => void;
    }

// component

export default class NavItem extends React.PureComponent<iPropsNavItem> {

    // name

    public static displayName: string = "NavItem";

    // events

    protected _handleClick (e: React.MouseEvent<HTMLAnchorElement>): void {

        if ("function" === typeof this.props.onClick) {
            this.props.onClick(e, this.props.index);
        }
        else {

            e.preventDefault();
            e.stopPropagation();

        }

    }

    // render

    public render (): React.JSX.Element {

        const disabled: boolean = Boolean(this.props.disabled);

        let className: string = "nav-item";

        if (this.props.className) {
            className += " " + this.props.className;
        }

        let linkClassName: string = "nav-link";

        if (disabled) {
            linkClassName += " disabled";
        }

        if (Boolean(this.props.active)) {
            linkClassName += " active";
        }

        if (Boolean(this.props.justify)) {
            linkClassName += " d-flex justify-content-between";
        }

        return <div id={ this.props.id } className={ className } style={ this.props.style }>

            {

                disabled ? <span className={ linkClassName } role="presentation" aria-disabled={ disabled ? "true" : undefined } tabIndex={ disabled ? -1 : undefined }>
                    { this.props.children }
                </span> : <a href="#" className={ linkClassName } role="presentation" aria-disabled={ disabled ? "true" : undefined } tabIndex={ disabled ? -1 : undefined } onClick={ this._handleClick.bind(this) }>
                    { this.props.children }
                </a>

            }

        </div>;

    }

}
