"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { iPropsNode, tVariant } from "../types";
    import { CardContext } from "./CardContext";
    import MaxHeightContent from "../MaxHeightContent";
    import CardHeader from "./CardHeader";
    import CardHeaderNav from "./CardHeaderNav";
    import CardImage from "./CardImage";
    import CardBody from "./CardBody";
    import CardList from "./CardList";
    import CardTable from "./CardTable";
    import CardFooter from "./CardFooter";

// Props && States

    interface iPropsCard extends iPropsNode {
        "variant"?: tVariant;
        "onSubmit"?: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
    };

// component

export default class Card extends React.PureComponent<iPropsCard> {

    // name

    public static displayName: string = "Card";

    // render

    public render (): JSX.Element {

        let className: string = "card";

        if (this.props.variant) {
            className += " border-" + this.props.variant;
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <CardContext.Provider value={ this.props.variant }>

            {

                "function" === typeof this.props.onSubmit ? <form id={ this.props.id } className={ className } style={ this.props.style } onSubmit={ this.props.onSubmit }>
                    { this.props.children }
                </form> : <div id={ this.props.id } className={ className }>

                    {
                        React.Children.toArray(this.props.children).filter((child: any): boolean => {

                            return MaxHeightContent === child.type
                                || CardHeader === child.type
                                || CardHeaderNav === child.type
                                || CardBody === child.type
                                || CardFooter === child.type
                                || CardList === child.type
                                || CardTable === child.type
                                || CardImage === child.type;

                        })
                    }

                </div>

            }

        </CardContext.Provider>;

    }

};
