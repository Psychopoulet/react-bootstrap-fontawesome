import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsInputNumber extends iPropsInput {
    "value"?: number;
    "min"?: number;
    "max"?: number;
    "step"?: number;
    "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: number, oldValue: number) => void;
}
interface iPropsInputFloatLabel extends iPropsInputNumber {
    "label": string;
}
export declare class InputFloat extends React.PureComponent<iPropsInputNumber> {
    static displayName: string;
    protected _handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
export declare class InputFloatLabel extends React.PureComponent<iPropsInputFloatLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
