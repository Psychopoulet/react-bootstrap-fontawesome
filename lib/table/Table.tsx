"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { iPropsNode, tVariant } from "../types";
    import TableHeader from "./TableHeader";
    import TableBody from "./TableBody";
    import TableFooter from "./TableFooter";

// Props && States

    export interface iPropsTable extends iPropsNode {
        "variant"?: tVariant;
        "responsive"?: boolean;
        "bordered"?: boolean;
        "borderless"?: boolean;
        "striped"?: boolean;
        "hover"?: boolean;
        "small"?: boolean;
    };

// component

export default class Table extends React.PureComponent<iPropsTable> {

    // name

    public static displayName: string = "Table";

    // render

    public render (): JSX.Element {

        let className: string = "table";

        if (this.props.variant) {
            className += " table-" + this.props.variant;
        }

        if (!!this.props.responsive) {
            className += " table-responsive";
        }

        if (!!this.props.bordered) {
            className += " table-bordered";
        }
        else if (!!this.props.borderless) {
            className += " table-borderless";
        }

        if (!!this.props.striped) {
            className += " table-striped";
        }

        if (!!this.props.hover) {
            className += " table-hover";
        }

        if (!!this.props.small) {
            className += " table-sm";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <table id={ this.props.id } className={ className } style={ this.props.style }>

            {
                React.Children.toArray(this.props.children).filter((child: any): boolean => {

                    return TableHeader === child.type
                        || TableBody === child.type
                        || TableFooter === child.type;

                })
            }

        </table>;

    }

};
