// deps
// externals
import * as React from "react";
// locals
import Button from "./Button";
// component
class ButtonGroup extends React.PureComponent {
    // constructor
    constructor(props) {
        super(props);
    }
    // render
    render() {
        let className = "btn-group";
        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }
        if ("boolean" === typeof this.props.block && this.props.block) {
            className += " col-12";
        }
        return React.createElement("div", { id: this.props.id, role: "button group", "aria-label": this.props.label, className: className, style: this.props.style }, React.Children.toArray(this.props.children).filter((child) => {
            return Button === child.type;
        }));
    }
}
// name
ButtonGroup.displayName = "ButtonGroup";
export default ButtonGroup;
