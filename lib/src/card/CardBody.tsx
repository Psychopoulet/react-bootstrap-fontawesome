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

    interface iPropsCardBody extends iPropsNode {
        "lead"?: boolean;
        "onSubmit"?: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
        "onMouseEnter"?: (e: React.MouseEvent<HTMLDivElement | HTMLFormElement>) => void;
        "onMouseLeave"?: (e: React.MouseEvent<HTMLDivElement | HTMLFormElement>) => void;
    }

// component

export default class CardBody extends React.PureComponent<iPropsCardBody> {

    // name

    public static displayName: string = "CardBody";

    // render

    public render (): React.JSX.Element {

        return <CardContext.Consumer>

            {

                (variant: tVariant): React.JSX.Element => {

                    let className: string = "card-body";

                    if (Boolean(this.props.lead)) {
                        className += " lead text-center";
                    }

                    if (variant) {
                        className += " text-" + variant;
                    }

                    if (this.props.className) {
                        className += " " + this.props.className;
                    }

                    return "function" === typeof this.props.onSubmit ? <form action="#" id={ this.props.id } className={ className } style={ this.props.style }
                        onSubmit={ this.props.onSubmit } onMouseEnter={ this.props.onMouseEnter } onMouseLeave={ this.props.onMouseLeave }
                    >
                        { this.props.children }
                    </form> : <div id={ this.props.id } className={ className } style={ this.props.style }
                        onMouseEnter={ this.props.onMouseEnter } onMouseLeave={ this.props.onMouseLeave }
                    >
                        { this.props.children }
                    </div>;

                }

            }

        </CardContext.Consumer>;

    }

}
