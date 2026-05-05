import * as React from "react";
import type { iPropsNode } from "../types";
export interface iPropsLabel extends iPropsNode {
    "for": string;
    "label": string;
    "disabled"?: boolean;
    "valid"?: boolean;
    "required"?: boolean;
}
export default class InputLabel extends React.PureComponent<iPropsLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
