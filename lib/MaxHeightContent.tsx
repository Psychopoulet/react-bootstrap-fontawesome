"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { iPropsNode } from "./types";

// Props && States

    export interface iPropsMaxHeightContent extends iPropsNode {
        "heightPX"?: number;
        "maxHeightPX"?: number;
    };

    interface iStyle {
        "overflow": "auto";
        "height"?: string;
        "maxHeight"?: string;
    };

// component

export default class MaxHeightContent extends React.PureComponent<iPropsMaxHeightContent> {

    // name

    public static displayName: string = "MaxHeightContent";

    // render

    public render (): JSX.Element {

        const style: iStyle = {
            "overflow": "auto"
        };

        if (this.props.heightPX) {
            style.height = this.props.heightPX + "px";
        }

        if (this.props.maxHeightPX) {
            style.maxHeight = this.props.maxHeightPX + "px";
        }

        return <div className={ this.props.className } style={ style }>
            { this.props.children }
        </div>;

    }

};
