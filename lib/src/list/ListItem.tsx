"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { ListContext } from "./ListContext";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant } from "../types";

// Props && States

    interface iPropsListItem extends iPropsNode {
        "variant"?: tVariant;
        "active"?: boolean;
        "disabled"?: boolean;
        "justify"?: boolean;
        "onClick"?: (e: React.MouseEvent<HTMLAnchorElement>) => void
    }

// component

export default class ListItem extends React.PureComponent<iPropsListItem> {

    // name

    public static displayName: string = "ListItem";

    // render

    public render (): React.JSX.Element {

        return <ListContext.Consumer>

            {

                (variant: tVariant): React.JSX.Element => {

                    const disabled: boolean = Boolean(this.props.disabled);

                    let className: string = "list-group-item";

                    if (Boolean(this.props.justify)) {
                        className += " d-flex justify-content-between align-items-center";
                    }

                    if (this.props.variant) {
                        className += " list-group-item-" + this.props.variant;
                    }
                    else if (variant) {
                        className += " text-" + variant;
                    }

                    if (disabled) {
                        className += " disabled";
                    }

                    if (Boolean(this.props.active)) {
                        className += " active";
                    }

                    if ("function" === typeof this.props.onClick) {
                        className += " list-group-item-action";
                    }

                    if (this.props.className) {
                        className += " " + this.props.className;
                    }

                    return "function" === typeof this.props.onClick && !disabled ? <a href="#" id={ this.props.id }
                        className={ className } style={ this.props.style }
                        aria-disabled={ disabled ? "true" : undefined }
                        onClick={ this.props.onClick }
                    >
                        { this.props.children }
                    </a> : <div id={ this.props.id }
                        className={ className } style={ this.props.style }
                        aria-disabled={ disabled ? "true" : undefined }
                    >
                        { this.props.children }
                    </div>;

                }

            }

        </ListContext.Consumer>;

    }

}
