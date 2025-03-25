"use strict";

// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// component

export default class ModalBody extends React.PureComponent<iPropsNode> {

    // name

    public static displayName: string = "ModalBody";

    // render

    public render (): React.JSX.Element {

        let className: string = "modal-body";

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <div id={ this.props.id } className={ className } style={ this.props.style }>

            { this.props.children }

        </div>;

    }

}
