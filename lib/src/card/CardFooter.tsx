"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { CardContext } from "./CardContext";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant } from "../types";

// component

export default class CardFooter extends React.PureComponent<iPropsNode> {

    // name

    public static displayName: string = "CardFooter";

    // statics

        // public

        public static contextType: React.Context<tVariant> = CardContext;

    // render

    public render (): React.JSX.Element {

        return <CardContext.Consumer>

            {

                (variant: tVariant): React.JSX.Element => {

                    return <div id={ this.props.id } className={
                        "card-footer"
                        + (variant ? " border-" + variant + " text-" + variant : "")
                        + (this.props.className ? " " + this.props.className : "")
                    } style={ this.props.style }>
                        { this.props.children }
                    </div>;

                }

            }

        </CardContext.Consumer>;

    }

}
