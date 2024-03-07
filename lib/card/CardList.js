"use strict";
// deps
// externals
import * as React from "react";
// locals
import { CardContext } from "./CardContext";
import List from "../list/List";
// component
class CardList extends React.PureComponent {
    // render
    render() {
        return React.createElement(CardContext.Consumer, null, (variant) => {
            return React.createElement(List, { id: this.props.id, variant: this.props.variant || variant, className: "m-0" + (this.props.className ? " " + this.props.className : ""), style: this.props.style, flush: true }, this.props.children);
        });
    }
}
// name
CardList.displayName = "CardList";
export default CardList;
