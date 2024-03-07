import * as React from "react";
import type { iPropsNode } from "../types";
interface iPropsInvalidFeedBack extends iPropsNode {
    "alert": string;
}
interface iPropsInvalidFeedBackMin extends iPropsNode {
    "min": number;
    "current": number;
}
interface iPropsInvalidFeedBackMax extends iPropsNode {
    "max": number;
    "current": number;
}
export declare class InvalidFeedBack extends React.PureComponent<iPropsInvalidFeedBack> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InvalidFeedBackRequired extends React.PureComponent<iPropsNode> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InvalidFeedBackFloat extends React.PureComponent<iPropsNode> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InvalidFeedBackInteger extends React.PureComponent<iPropsNode> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InvalidFeedBackMin extends React.PureComponent<iPropsInvalidFeedBackMin> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InvalidFeedBackMax extends React.PureComponent<iPropsInvalidFeedBackMax> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InvalidFeedBackMinLength extends React.PureComponent<iPropsInvalidFeedBackMin> {
    static displayName: string;
    render(): JSX.Element;
}
export declare class InvalidFeedBackMaxLength extends React.PureComponent<iPropsInvalidFeedBackMax> {
    static displayName: string;
    render(): JSX.Element;
}
export {};
