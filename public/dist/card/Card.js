// deps
// externals
import * as React from "react";
// locals
import MaxHeightContent from "../MaxHeightContent";
import { CardContext } from "./CardContext";
import CardHeader from "./CardHeader";
import CardHeaderNav from "./CardHeaderNav";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardList from "./CardList";
import CardTable from "./CardTable";
import CardFooter from "./CardFooter";
// component
class Card extends React.PureComponent {
    // render
    render() {
        let className = "card";
        if (this.props.variant) {
            className += " border-" + this.props.variant;
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement(CardContext.Provider, { value: this.props.variant }, "function" === typeof this.props.onSubmit ? React.createElement("form", { id: this.props.id, className: className, style: this.props.style, onSubmit: this.props.onSubmit }, this.props.children) : React.createElement("div", { id: this.props.id, className: className }, React.Children.toArray(this.props.children).filter((child) => {
            return MaxHeightContent === child.type
                || CardHeader === child.type
                || CardHeaderNav === child.type
                || CardBody === child.type
                || CardList === child.type
                || CardTable === child.type
                || CardImage === child.type
                || CardFooter === child.type;
        })));
    }
}
// name
Card.displayName = "Card";
export default Card;
