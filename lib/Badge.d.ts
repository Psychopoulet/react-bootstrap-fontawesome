import * as React from "react";
import { type tICon } from "./Icon";
import type { iPropsNode, tVariant } from "./types";
export interface iPropsBadge extends iPropsNode {
    "variant"?: tVariant;
    "pill"?: boolean;
    "icon"?: tICon;
    "title"?: string;
}
export default class Badge extends React.PureComponent<iPropsBadge> {
    static displayName: string;
    render(): JSX.Element;
}
