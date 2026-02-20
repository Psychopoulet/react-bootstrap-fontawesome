// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant } from "./types";

// Props && States

    export interface iPropsAlert extends iPropsNode {
        "variant"?: tVariant;
        "onClose"?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    }

// component

export default class Alert extends React.PureComponent<iPropsAlert> {

    // name

    public static displayName: string = "Alert";

    // render

    public render (): React.JSX.Element {

        let className: string = "alert";

        if ("string" === typeof this.props.variant) {
            className += " alert-" + this.props.variant;
        }

        if ("function" === typeof this.props.onClose) {
            className += " alert-dismissible fade show";
        }

        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }

        return <div id={ this.props.id } className={ className } role="alert" style={ this.props.style }>

            { this.props.children }

            { "function" === typeof this.props.onClose ? <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={ this.props.onClose } /> : undefined }

        </div>;

    }

}
