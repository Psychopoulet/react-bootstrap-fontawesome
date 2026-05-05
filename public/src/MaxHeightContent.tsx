// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode } from "./types";

    interface iStyle {
        "overflow": "auto";
        "height"?: string;
        "maxHeight"?: string;
    }

// Props && States

    export interface iPropsMaxHeightContent extends iPropsNode {
        "heightPX"?: number;
        "maxHeightPX"?: number;
    }

// component

export default class MaxHeightContent extends React.PureComponent<iPropsMaxHeightContent> {

    // name

    public static displayName: string = "MaxHeightContent";

    // render

    public render (): React.JSX.Element {

        const style: iStyle = {
            "overflow": "auto"
        };

        if ("number" === typeof this.props.heightPX) {
            style.height = this.props.heightPX + "px";
        }

        if ("number" === typeof this.props.maxHeightPX) {
            style.maxHeight = this.props.maxHeightPX + "px";
        }

        return <div className={ this.props.className } style={ style }>
            { this.props.children }
        </div>;

    }

}
