import * as React from "react";
import type { iPropsNode, tSize, tVariant } from "../types";
export interface iPropsList extends iPropsNode {
    "variant"?: tVariant;
    "flush"?: boolean;
    "horizontal"?: tSize | boolean;
}
export default class List extends React.PureComponent<iPropsList> {
    static displayName: string;
    render(): React.JSX.Element;
}
