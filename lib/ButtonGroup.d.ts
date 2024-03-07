import * as React from "react";
import type { iPropsNode } from "./types";
export interface iPropsButtonGroup extends iPropsNode {
    "label"?: string;
    "block"?: boolean;
}
export default class ButtonGroup extends React.PureComponent<iPropsButtonGroup> {
    static displayName: string;
    constructor(props: iPropsButtonGroup);
    render(): JSX.Element;
}
