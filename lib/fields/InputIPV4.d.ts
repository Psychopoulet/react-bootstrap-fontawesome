import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsInputIPV4 extends iPropsInput {
    "value"?: string;
    "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: string, oldValue: string) => void;
}
export interface iPropsInputIPV4Label extends iPropsInputIPV4 {
    "label": string;
}
export declare class InputIPV4 extends React.PureComponent<iPropsInputIPV4> {
    static displayName: string;
    static PATTERN: string;
    static MIN: number;
    static MAX: number;
    render(): JSX.Element;
}
export declare class InputIPV4Label extends React.PureComponent<iPropsInputIPV4Label> {
    static displayName: string;
    render(): JSX.Element;
}
