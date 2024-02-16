"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { iPropsNode, tVariant } from "../types";
    import { CardContext } from "./CardContext";

// component

export default class CardFooter extends React.PureComponent<iPropsNode> {

    // name

    public static displayName: string = "CardFooter";

    // statics

        // public

        public static contextType: React.Context<tVariant> = CardContext;

    // render

    public render (): JSX.Element {

        return <CardContext.Consumer>

            {

                (variant: tVariant): JSX.Element => {

                    return <div id={ this.props.id } className={
                        "card-footer" +
                        (variant ? " border-" + variant + " text-" + variant : "") +
                        (this.props.className ? " " + this.props.className : "")
                    } style={ this.props.style }>
                        { this.props.children }
                    </div>;

                }

            }

        </CardContext.Consumer>;

    }

};
