// deps
// externals
import * as React from "react";
// locals
import { CardContext } from "./CardContext";
// component
class CardBody extends React.PureComponent {
    // render
    render() {
        return React.createElement(CardContext.Consumer, null, (variant) => {
            let className = "card-body";
            if (Boolean(this.props.lead)) {
                className += " lead text-center";
            }
            if (variant) {
                className += " text-" + variant;
            }
            if (this.props.className) {
                className += " " + this.props.className;
            }
            return "function" === typeof this.props.onSubmit ? React.createElement("form", { action: "#", id: this.props.id, className: className, style: this.props.style, onSubmit: this.props.onSubmit, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave }, this.props.children) : React.createElement("div", { id: this.props.id, className: className, style: this.props.style, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave }, this.props.children);
        });
    }
}
// name
CardBody.displayName = "CardBody";
export default CardBody;
