"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import List, { type iPropsList } from "../list/List";

// component

export default class ModalList extends React.PureComponent<iPropsList> {

    // name

    public static displayName: string = "ModalList";

    // render

    public render (): JSX.Element {

        return <List id={ this.props.id } className={ "m-0" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style }
            flush={ true }
        >
            { this.props.children }
        </List>;

    }

}
