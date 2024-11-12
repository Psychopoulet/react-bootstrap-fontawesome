"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import NavItem from "./NavItem";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// Props && States

    export interface iPropsNavTabs extends iPropsNode {
        "items"?: string[];
        "selectedIndex"?: number;
        "justified"?: boolean;
        "pills"?: boolean;
        "onSelect"?: (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number) => void;
    }

    interface iStatesNavTabs {
        "selectedIndex": number;
    }

// component

export default class NavTabs extends React.Component<iPropsNavTabs, iStatesNavTabs> {

    // name

    public static displayName: string = "NavTabs";

    // constructor

    public constructor (props: iPropsNavTabs) {

        super(props);

        // states

        this.state = {
            "selectedIndex": "number" === typeof this.props.selectedIndex ? this.props.selectedIndex : 0
        };

    }

    public static getDerivedStateFromProps (nextProps: Readonly<iPropsNavTabs>, nextState: Readonly<iStatesNavTabs>): iStatesNavTabs | undefined {

        if (nextProps.selectedIndex === nextState.selectedIndex) {
            return undefined;
        }
        else {

            return {
                ...nextState,
                "selectedIndex": nextProps.selectedIndex as number
            };

        }

    }

    // events

    protected _handleSelect (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number): void {

        let newSecuredIndex: number;

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

    public render (): JSX.Element {

        let className: string = "nav";

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

        return <div id={ this.props.id } role="tablist" className={ className } style={ this.props.style }>

            {

                this.props.items ? this.props.items.map((title: string, key: number): JSX.Element => {

                    return <NavItem key={ key } index={ key }
                        active={ this.state.selectedIndex === key } disabled={ this.state.selectedIndex === key }
                        onClick={ this._handleSelect.bind(this) }
                    >
                        { title }
                    </NavItem>;

                }) : undefined

            }

            {
                React.Children.toArray(this.props.children).filter((child: any): boolean => {
                    return NavItem === child.type;
                })
            }

        </div>;

    }

}
