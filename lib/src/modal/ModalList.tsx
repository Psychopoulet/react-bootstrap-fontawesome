"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import ModalBody from "./ModalBody";
    import List, { type iPropsList } from "../list/List";

// component

export default class ModalList extends React.PureComponent<iPropsList> {

    // name

    public static displayName: string = "ModalList";

    // render

    public render (): React.JSX.Element {

        return <ModalBody id={ this.props.id } className={ "p-0" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style }>

            <List
                flush={ true }
            >
                { this.props.children }
            </List>

        </ModalBody>;

    }

}
