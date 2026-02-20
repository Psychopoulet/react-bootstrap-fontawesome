import * as React from "react";
import { type tIcon } from "./Icon";
import type { iPropsNode, tVariant } from "./types";
export interface iPropsBadge extends iPropsNode {
    "variant"?: tVariant;
    "pill"?: boolean;
    "icon"?: tIcon;
    "title"?: string;
}
export default class Badge extends React.PureComponent<iPropsBadge> {
    static displayName: string;
    render(): React.JSX.Element;
}
