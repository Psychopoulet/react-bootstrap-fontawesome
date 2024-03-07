import * as React from "react";
import type { iPropsNode, tVariant } from "./types";
export interface iPropsAlert extends iPropsNode {
    "variant"?: tVariant;
    "onClose"?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class Alert extends React.PureComponent<iPropsAlert> {
    static displayName: string;
    render(): JSX.Element;
}
