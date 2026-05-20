import * as React from "react";
import type { iPropsNode } from "../types";
interface iPropsListItemHeader extends iPropsNode {
    "justify"?: boolean;
}
export default class ListItemHeader extends React.PureComponent<iPropsListItemHeader> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
