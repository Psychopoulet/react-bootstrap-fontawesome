"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import NavTabs, { type iPropsNavTabs } from "../nav/NavTabs";

// component

export default class CardHeaderNav extends React.PureComponent<iPropsNavTabs> {

    // name

    public static displayName: string = "CardHeaderNav";

    // render

    public render (): JSX.Element {

        let className: string = "card-header";

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <div id={ this.props.id } className={ className } style={ this.props.style }>

            <NavTabs
                items={ this.props.items }
                selectedIndex={ this.props.selectedIndex }
                justified={ this.props.justified } pills={ this.props.pills } className="card-header-tabs"
                onSelect={ this.props.onSelect }
            >
                { this.props.children }
            </NavTabs>

        </div>;

    }

}
