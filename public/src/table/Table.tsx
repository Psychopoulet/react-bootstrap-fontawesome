// deps

    // externals
    import * as React from "react";

    // locals
    import TableHeader from "./TableHeader";
    import TableBody from "./TableBody";
    import TableFooter from "./TableFooter";


// types & interfaces

    // locals
    import type { iPropsNode, tVariant } from "../types";

// Props && States

    export interface iPropsTable extends iPropsNode {
        "variant"?: tVariant;
        "responsive"?: boolean;
        "bordered"?: boolean;
        "borderless"?: boolean;
        "striped"?: boolean;
        "hover"?: boolean;
        "small"?: boolean;
    }

// component

export default class Table extends React.PureComponent<iPropsTable> {

    // name

    public static displayName: string = "Table";

    // render

    public render (): React.JSX.Element {

        let className: string = "table";

        if (this.props.variant) {
            className += " table-" + this.props.variant;
        }

        if (Boolean(this.props.responsive)) {
            className += " table-responsive";
        }

        if (Boolean(this.props.bordered)) {
            className += " table-bordered";
        }
        else if (Boolean(this.props.borderless)) {
            className += " table-borderless";
        }

        if (Boolean(this.props.striped)) {
            className += " table-striped";
        }

        if (Boolean(this.props.hover)) {
            className += " table-hover";
        }

        if (Boolean(this.props.small)) {
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

}
