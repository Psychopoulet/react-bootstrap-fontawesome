import * as React from "react";
import type { iPropsInput } from "../types";
export interface iPropsRange extends iPropsInput {
    "value"?: number;
    "unit"?: string;
    "min"?: number;
    "max"?: number;
    "step"?: number;
    "onChange"?: (e: React.MouseEvent<HTMLInputElement>, newValue: number, oldValue: number) => void;
}
interface iPropsRangeLabel extends iPropsRange {
    "value": number;
}
export declare class Range extends React.PureComponent<iPropsRange, iPropsRangeLabel> {
    static displayName: string;
    constructor(props: iPropsRange);
    UNSAFE_componentWillReceiveProps(nextProps: iPropsRange): void;
    protected _handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    protected _handleMouseUp(e: React.MouseEvent<HTMLInputElement>): void;
    private _render;
    render(): React.JSX.Element;
}
export declare class RangeLabel extends React.PureComponent<iPropsRangeLabel> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
