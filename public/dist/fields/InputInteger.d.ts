import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsInputNumber extends iPropsInput {
    "value": number;
    "min"?: number;
    "max"?: number;
    "step"?: number;
    "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: number, oldValue: number) => void;
}
interface iPropsInputIntegerLabel extends iPropsInputNumber {
    "label": string;
    "margin-bottom"?: number;
}
export declare class InputInteger extends React.PureComponent<iPropsInputNumber> {
    static displayName: string;
    protected _handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
export declare class InputIntegerLabel extends React.PureComponent<iPropsInputIntegerLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
