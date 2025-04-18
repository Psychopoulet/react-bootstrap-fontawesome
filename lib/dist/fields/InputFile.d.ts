import * as React from "react";
import type { iPropsField } from "../types";
export interface iPropsInputFile extends iPropsField {
    "maxSize"?: number;
    "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, file: File | null) => void;
    "onChangeError"?: (e: React.ChangeEvent<HTMLInputElement>, error: Error) => void;
}
export interface iPropsInputFileLabel extends iPropsInputFile {
    "label": string;
    "margin-bottom"?: number;
}
export declare class InputFile extends React.PureComponent<iPropsInputFile> {
    static displayName: string;
    protected _handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): React.JSX.Element;
}
export declare class InputFileLabel extends React.PureComponent<iPropsInputFileLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
