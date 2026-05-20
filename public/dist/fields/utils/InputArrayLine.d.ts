import * as React from "react";
import type { iPropsInput } from "../../types";
interface iPropsInputArrayLine extends iPropsInput {
    "index": number;
    "value": string;
    "disabled": boolean;
    "inputRef"?: React.RefObject<HTMLInputElement>;
    "onLineChange": (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>, index: number, newValue: string, oldValue: string, handler: "blur" | "enter") => void;
    "onLineDelete": (e: React.MouseEvent<HTMLButtonElement>, index: number, newValue: string) => void;
}
export interface iPropsInputArrayLabel extends iPropsInputArrayLine {
    "label": string;
    "margin-bottom"?: number;
}
interface iStateInputArrayLine {
    "value": string;
}
export default class InputArrayLine extends React.Component<iPropsInputArrayLine, iStateInputArrayLine> {
    static displayName: string;
    constructor(props: iPropsInputArrayLine);
    componentDidUpdate(prevProps: iPropsInputArrayLine): void;
    private readonly _handleChange;
    private readonly _handleBlur;
    private readonly _handleKeyDown;
    private readonly _handleDelete;
    render(): React.JSX.Element;
}
export {};
