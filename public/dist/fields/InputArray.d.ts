import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsInputArray extends iPropsInput {
    "value"?: string[];
    "onChange"?: (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>, newValue: string[], oldValue: string[]) => void;
    "onAddLine"?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>, index: number, newValue: string) => void;
    "onDeleteLine"?: (e: React.MouseEvent<HTMLButtonElement>, index: number, value: string) => void;
}
export interface iPropsInputArrayLabel extends iPropsInputArray {
    "label": string;
    "margin-bottom"?: number;
}
export interface iStateInputArray {
    "newLine": string;
    "values": string[];
}
export declare class InputArray extends React.Component<iPropsInputArray, iStateInputArray> {
    static displayName: string;
    private readonly _focus;
    constructor(props: iPropsInputArray);
    componentDidUpdate(prevProps: iPropsInputArray): void;
    private readonly _handleChangeNewLine;
    private readonly _handleAddLineWithEnter;
    private readonly _handleAddLine;
    private readonly _handleLineChange;
    private readonly _handleLineDelete;
    render(): React.JSX.Element;
}
export declare class InputArrayLabel extends React.PureComponent<iPropsInputArrayLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
