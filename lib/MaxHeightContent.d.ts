import * as React from "react";
import type { iPropsNode } from "./types";
export interface iPropsMaxHeightContent extends iPropsNode {
    "heightPX"?: number;
    "maxHeightPX"?: number;
}
export default class MaxHeightContent extends React.PureComponent<iPropsMaxHeightContent> {
    static displayName: string;
    render(): JSX.Element;
}
