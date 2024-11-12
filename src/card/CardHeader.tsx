"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { CardContext } from "./CardContext";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant } from "../types";

// Props && States

    interface iPropsCardHeader extends iPropsNode {
        "justify"?: boolean;
    }

// component

export default class CardHeader extends React.PureComponent<iPropsCardHeader> {

    // name

    public static displayName: string = "CardHeader";

    // statics

        // public

        public static contextType: React.Context<tVariant> = CardContext;

    // render

    public render (): JSX.Element {

        return <CardContext.Consumer>

            {

                (variant: tVariant): JSX.Element => {

                    let className: string = "card-header";

                    if (Boolean(this.props.justify)) {
                        className += " d-flex justify-content-between align-items-center";
                    }

                    if (variant) {
                        className += " border-" + variant + " text-" + variant;
                    }

                    if (this.props.className) {
                        className += " " + this.props.className;
                    }

                    return <div id={ this.props.id } className={ className } style={ this.props.style }>
                        { this.props.children }
                    </div>;

                }

            }

        </CardContext.Consumer>;

    }

}
