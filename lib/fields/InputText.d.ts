import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsInputText extends iPropsInput {
    "value"?: string;
    "pattern"?: string;
    "minLength"?: number;
    "maxLength"?: number;
    "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: string, oldValue: string) => void;
}
export interface iPropsInputTextLabel extends iPropsInputText {
    "label": string;
}
export declare class InputText extends React.PureComponent<iPropsInputText> {
    static displayName: string;
    constructor(props: iPropsInputText);
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export declare class InputTextLabel extends React.PureComponent<iPropsInputTextLabel> {
    static displayName: string;
    private _renderError;
    render(): JSX.Element;
}
