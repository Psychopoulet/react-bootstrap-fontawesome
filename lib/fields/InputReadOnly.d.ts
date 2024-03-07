import * as React from "react";
import type { iPropsField } from "../types";
export interface iPropsReadOnly extends iPropsField {
    "value"?: string | number;
}
interface iPropsInputReadOnlyLabel extends iPropsReadOnly {
    "label": string;
}
export declare class InputReadOnly extends React.PureComponent<iPropsReadOnly> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InputReadOnlyLabel extends React.PureComponent<iPropsInputReadOnlyLabel> {
    static displayName: string;
    private _renderError;
    render(): JSX.Element;
}
export {};
