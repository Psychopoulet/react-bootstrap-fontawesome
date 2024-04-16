import * as React from "react";
import type { iPropsNode } from "../types";
export interface iPropsNavTabs extends iPropsNode {
    "items"?: string[];
    "selectedIndex"?: number;
    "justified"?: boolean;
    "pills"?: boolean;
    "onSelect"?: (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number) => void;
}
interface iStatesNavTabs {
    "selectedIndex": number;
}
export default class NavTabs extends React.Component<iPropsNavTabs, iStatesNavTabs> {
    static displayName: string;
    constructor(props: iPropsNavTabs);
    static getDerivedStateFromProps(nextProps: Readonly<iPropsNavTabs>, nextState: Readonly<iStatesNavTabs>): iStatesNavTabs | null;
    protected _handleSelect(e: React.MouseEvent<HTMLAnchorElement>, newIndex: number): void;
    render(): JSX.Element;
}
export {};
