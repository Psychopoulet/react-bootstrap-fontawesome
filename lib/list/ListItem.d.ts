import * as React from "react";
import type { iPropsNode, tVariant } from "../types";
interface iPropsListItem extends iPropsNode {
    "variant"?: tVariant;
    "active"?: boolean;
    "disabled"?: boolean;
    "justify"?: boolean;
    "onClick"?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export default class ListItem extends React.PureComponent<iPropsListItem> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
