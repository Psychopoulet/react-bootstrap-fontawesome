import * as React from "react";
import type { iPropsField } from "../types";
interface iPropsSelect extends iPropsField {
    "value": number;
    "onChange"?: (e: React.ChangeEvent<HTMLSelectElement>, newValue: number, oldValue: number) => void;
}
interface iPropsSelectLabel extends iPropsSelect {
    "label": string;
    "margin-bottom"?: number;
}
export declare class SelectInteger extends React.PureComponent<iPropsSelect> {
    static displayName: string;
    protected _handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
    render(): React.JSX.Element;
}
export declare class SelectIntegerLabel extends React.PureComponent<iPropsSelectLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
