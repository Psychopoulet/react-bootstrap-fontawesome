import * as React from "react";
import { type tIcon } from "./Icon";
import type { iPropsNode, tVariant } from "./types";
export interface iPropsButton extends iPropsNode {
    "type"?: "button" | "submit" | "reset";
    "variant"?: tVariant;
    "outline"?: boolean;
    "disabled"?: boolean;
    "block"?: boolean;
    "size"?: "sm" | "md" | "lg";
    "icon"?: tIcon;
    "title"?: string;
    "onClick"?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class Button extends React.PureComponent<iPropsButton> {
    static displayName: string;
    protected _handleClick(e: React.MouseEvent<HTMLButtonElement>): void;
    render(): React.JSX.Element;
}
