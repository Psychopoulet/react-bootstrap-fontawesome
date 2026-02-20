// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "../types";

// Props && States

    export interface iPropsLabel extends iPropsNode {
        "for": string;
        "label": string;
        "disabled"?: boolean;
        "valid"?: boolean;
        "required"?: boolean;
    }

// component

export default class InputLabel extends React.PureComponent<iPropsLabel> {

    // name

    public static displayName: string = "InputLabel";

    // render

    public render (): React.JSX.Element {

        let className: string = "";

        if (this.props.disabled) {
            className += "text-muted";
        }
        else if ("boolean" === typeof this.props.valid && !this.props.valid) {
            className += "text-danger";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <label id={ this.props.id } className={ className } style={ this.props.style }
            htmlFor={ this.props.for }
            aria-label={ this.props.label }
        >

            { this.props.label } {
                this.props.required
                    ? <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small>
                    : undefined
            }

        </label>


    }

}
