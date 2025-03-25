import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsTextArea extends iPropsInput {
    "rows"?: number;
    "value"?: string;
    "pattern"?: string;
    "minLength"?: number;
    "maxLength"?: number;
    "onChange"?: (e: React.ChangeEvent<HTMLTextAreaElement>, newValue: string, oldValue: string) => void;
}
export interface iPropsTextAreaLabel extends iPropsTextArea {
    "label": string;
}
export declare class TextArea extends React.PureComponent<iPropsTextArea> {
    static displayName: string;
    protected _handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    render(): React.JSX.Element;
}
export declare class TextAreaLabel extends React.PureComponent<iPropsTextAreaLabel> {
    static displayName: string;
    private _renderError;
    render(): React.JSX.Element;
}
