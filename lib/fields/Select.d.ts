import * as React from "react";
import type { iPropsField } from "../types";
interface iPropsSelect extends iPropsField {
    "value": string;
    "onChange"?: (e: React.ChangeEvent<HTMLSelectElement>, newValue: string, oldValue: string) => void;
}
interface iPropsSelectLabel extends iPropsSelect {
    "label": string;
}
export declare class Select extends React.PureComponent<iPropsSelect> {
    static displayName: string;
    protected _handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
    render(): JSX.Element;
}
export declare class SelectLabel extends React.PureComponent<iPropsSelectLabel> {
    static displayName: string;
    render(): JSX.Element;
}
export {};
