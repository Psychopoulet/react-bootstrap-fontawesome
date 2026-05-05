// deps
// externals
import * as React from "react";
// locals
import { CardContext } from "./CardContext";
// component
export default class CardFooter extends React.PureComponent {
    // name
    static displayName = "CardFooter";
    // statics
    // public
    static contextType = CardContext;
    // render
    render() {
        return React.createElement(CardContext.Consumer, null, (variant) => {
            return React.createElement("div", { id: this.props.id, className: "card-footer"
                    + (variant ? " border-" + variant + " text-" + variant : "")
                    + ("string" === typeof this.props.className ? " " + this.props.className : ""), style: this.props.style }, this.props.children);
        });
    }
}
