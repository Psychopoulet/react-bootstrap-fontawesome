import * as React from "react";
import type { iPropsField } from "../types";
export interface iPropsInputFile extends iPropsField {
    "maxSize"?: number;
    "onChange"?: (e: React.ChangeEvent<HTMLInputElement>, file: File | null) => void;
    "onChangeError"?: (e: React.ChangeEvent<HTMLInputElement>, error: Error) => void;
}
export interface iPropsInputFileLabel extends iPropsInputFile {
    "label": string;
}
export declare class InputFile extends React.PureComponent<iPropsInputFile> {
    static displayName: string;
    constructor(props: iPropsInputFile);
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export declare class InputFileLabel extends React.PureComponent<iPropsInputFileLabel> {
    static displayName: string;
    render(): JSX.Element;
}
