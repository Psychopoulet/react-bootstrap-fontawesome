"use strict";
// deps
// externals
import * as React from "react";
// locals
import { CardContext } from "./CardContext";
// component
class CardFooter extends React.PureComponent {
    // render
    render() {
        return React.createElement(CardContext.Consumer, null, (variant) => {
            return React.createElement("div", { id: this.props.id, className: "card-footer"
                    + (variant ? " border-" + variant + " text-" + variant : "")
                    + (this.props.className ? " " + this.props.className : ""), style: this.props.style }, this.props.children);
        });
    }
}
// name
CardFooter.displayName = "CardFooter";
// statics
// public
CardFooter.contextType = CardContext;
export default CardFooter;
