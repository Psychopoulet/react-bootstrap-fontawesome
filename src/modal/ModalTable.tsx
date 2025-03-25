"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import Table, { type iPropsTable } from "../table/Table";

// component

export default class ModalTable extends React.PureComponent<iPropsTable> {

    // name

    public static displayName: string = "ModalTable";

    // render

    public render (): React.JSX.Element {

        return <Table id={ this.props.id } className={ "m-0" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style }
            variant={ this.props.variant }
            bordered={ this.props.bordered }
            borderless={ this.props.borderless }
            striped={ this.props.striped }
            hover={ this.props.hover }
            small={ this.props.small }
        >
            { this.props.children }
        </Table>;

    }

}
