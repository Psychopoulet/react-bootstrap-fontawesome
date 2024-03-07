"use strict";
// deps
// externals
import * as React from "react";
// locals
import { CardContext } from "./CardContext";
// component
class CardHeader extends React.PureComponent {
    // render
    render() {
        return React.createElement(CardContext.Consumer, null, (variant) => {
            let className = "card-header";
            if (!!this.props.justify) {
                className += " d-flex justify-content-between align-items-center";
            }
            if (variant) {
                className += " border-" + variant + " text-" + variant;
            }
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return React.createElement("div", { id: this.props.id, className: className, style: this.props.style }, this.props.children);
        });
    }
}
// name
CardHeader.displayName = "CardHeader";
// statics
// public
CardHeader.contextType = CardContext;
export default CardHeader;
