// deps
// externals
import * as React from "react";
// locals
import NavTabs from "../nav/NavTabs";
// component
export default class CardHeaderNav extends React.PureComponent {
    // name
    static displayName = "CardHeaderNav";
    // render
    render() {
        let className = "card-header";
        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("div", { id: this.props.id, className: className, style: this.props.style },
            React.createElement(NavTabs, { items: this.props.items, selectedIndex: this.props.selectedIndex, justified: this.props.justified, pills: this.props.pills, className: "card-header-tabs", onSelect: this.props.onSelect }, this.props.children));
    }
}
