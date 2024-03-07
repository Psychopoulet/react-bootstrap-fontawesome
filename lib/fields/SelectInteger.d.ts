import * as React from "react";
import type { iPropsField } from "../types";
interface iPropsSelect extends iPropsField {
    "value": number;
    "onChange"?: (e: React.ChangeEvent<HTMLSelectElement>, newValue: number, oldValue: number) => void;
}
interface iPropsSelectLabel extends iPropsSelect {
    "label": string;
}
export declare class SelectInteger extends React.PureComponent<iPropsSelect> {
    static displayName: string;
    constructor(props: iPropsSelect);
    handleChange(e: React.ChangeEvent<HTMLSelectElement>): void;
    render(): JSX.Element;
}
export declare class SelectIntegerLabel extends React.PureComponent<iPropsSelectLabel> {
    static displayName: string;
    render(): JSX.Element;
}
export {};
