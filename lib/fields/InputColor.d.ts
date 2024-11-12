import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsInputColor extends iPropsInput {
    "value"?: string;
    "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: string, oldValue: string) => void;
}
export interface iPropsInputColorLabel extends iPropsInputColor {
    "label": string;
}
export declare class InputColor extends React.PureComponent<iPropsInputColor> {
    static displayName: string;
    static PATTERN: string;
    static MIN: number;
    static MAX: number;
    protected _handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    private _render;
    render(): JSX.Element;
}
export declare class InputColorLabel extends React.PureComponent<iPropsInputColorLabel> {
    static displayName: string;
    private _renderError;
    render(): JSX.Element;
}
