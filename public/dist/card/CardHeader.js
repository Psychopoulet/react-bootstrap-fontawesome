// deps
// externals
import * as React from "react";
// locals
import { CardContext } from "./CardContext";
// component
export default class CardHeader extends React.PureComponent {
    // name
    static displayName = "CardHeader";
    // statics
    // public
    static contextType = CardContext;
    // render
    render() {
        return React.createElement(CardContext.Consumer, null, (variant) => {
            let className = "card-header";
            if (Boolean(this.props.justify)) {
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
