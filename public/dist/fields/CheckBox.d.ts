import * as React from "react";
import type { iPropsField } from "../types";
interface iPropsCheckBox extends iPropsField {
    "checked"?: boolean;
    "onToogle"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: boolean, oldValue: boolean) => void;
}
interface iPropsCheckBoxLabel extends iPropsCheckBox {
    "label": string;
    "margin-bottom"?: number;
}
export declare class CheckBox extends React.PureComponent<iPropsCheckBox> {
    static displayName: string;
    protected _handleToogle(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
export declare class CheckBoxLabel extends React.PureComponent<iPropsCheckBoxLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
export declare class CheckBoxPrettierLabel extends React.PureComponent<iPropsCheckBoxLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
