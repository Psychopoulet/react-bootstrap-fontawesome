import * as React from "react";
import type { iPropsNode } from "../types";
interface iPropsNavItem extends iPropsNode {
    "index": number;
    "active"?: boolean;
    "disabled"?: boolean;
    "justify"?: boolean;
    "onClick"?: (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number) => void;
}
export default class NavItem extends React.PureComponent<iPropsNavItem> {
    static displayName: string;
    constructor(props: iPropsNavItem);
    handleClick(e: React.MouseEvent<HTMLAnchorElement>): void;
    render(): JSX.Element;
}
export {};
