import * as React from "react";
import type { iPropsNode, tVariant } from "../types";
export interface iPropsTable extends iPropsNode {
    "variant"?: tVariant;
    "responsive"?: boolean;
    "bordered"?: boolean;
    "borderless"?: boolean;
    "striped"?: boolean;
    "hover"?: boolean;
    "small"?: boolean;
}
export default class Table extends React.PureComponent<iPropsTable> {
    static displayName: string;
    render(): JSX.Element;
}
