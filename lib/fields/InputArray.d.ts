import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsInputArray extends iPropsInput {
    "value"?: string[];
    "onChange"?: (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>, newValue: string[], oldValue: string[]) => void;
}
export interface iPropsInputArrayLabel extends iPropsInputArray {
    "label": string;
}
export declare class InputArray extends React.PureComponent<iPropsInputArray> {
    static displayName: string;
    private _focus;
    constructor(props: iPropsInputArray);
    private _handleAddLine;
    render(): JSX.Element;
}
export declare class InputArrayLabel extends React.PureComponent<iPropsInputArrayLabel> {
    static displayName: string;
    render(): JSX.Element;
}
