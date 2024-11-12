"use strict";
// deps
// externals
import * as React from "react";
// locals
import NavItem from "./NavItem";
// component
class NavTabs extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        // states
        this.state = {
            "selectedIndex": "number" === typeof this.props.selectedIndex ? this.props.selectedIndex : 0
        };
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        if (nextProps.selectedIndex === nextState.selectedIndex) {
            return undefined;
        }
        else {
            return Object.assign(Object.assign({}, nextState), { "selectedIndex": nextProps.selectedIndex });
        }
    }
    // events
    _handleSelect(e, newIndex) {
        let newSecuredIndex;
        if (this.props.items) {
            if (newIndex >= this.props.items.length) {
                newSecuredIndex = this.props.items.length - 1;
            }
            else if (0 > newIndex) {
                newSecuredIndex = 0;
            }
            else {
                newSecuredIndex = newIndex;
            }
        }
        else {
            newSecuredIndex = newIndex;
        }
        this.setState({
            "selectedIndex": newSecuredIndex
        });
        if ("function" === typeof this.props.onSelect) {
            this.props.onSelect(e, newSecuredIndex);
        }
        else if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    // render
    render() {
        let className = "nav";
        if (Boolean(this.props.pills)) {
            className += " nav-pills";
        }
        else {
            className += " nav-tabs";
        }
        if (Boolean(this.props.justified)) {
            className += " nav-justified";
        }
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return React.createElement("div", { id: this.props.id, role: "tablist", className: className, style: this.props.style },
            this.props.items ? this.props.items.map((title, key) => {
                return React.createElement(NavItem, { key: key, index: key, active: this.state.selectedIndex === key, disabled: this.state.selectedIndex === key, onClick: this._handleSelect.bind(this) }, title);
            }) : undefined,
            React.Children.toArray(this.props.children).filter((child) => {
                return NavItem === child.type;
            }));
    }
}
// name
NavTabs.displayName = "NavTabs";
export default NavTabs;
