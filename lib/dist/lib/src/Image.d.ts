import * as React from "react";
import type { iPropsNode } from "./types";
export interface iPropsImage extends iPropsNode {
    "src": string;
    "alt"?: string;
    "height"?: number;
    "width"?: number;
    "crossOrigin"?: "anonymous" | "use-credentials" | "";
    "onClick"?: (e: React.MouseEvent<HTMLImageElement>) => void;
    "onMouseEnter"?: (e: React.MouseEvent<HTMLImageElement>) => void;
    "onMouseLeave"?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
export default class Image extends React.PureComponent<iPropsImage> {
    static displayName: string;
    render(): React.JSX.Element;
}
