import React from "react";
import type { iPropsNode } from "./types";
interface iStates {
    "src": string;
}
interface iProps extends iPropsNode {
    "src": string;
    "title"?: string;
    "autoplay"?: boolean;
    "loop"?: boolean;
}
export default class SoundReader extends React.Component<iProps, iStates> {
    static displayName: string;
    constructor(props: iProps);
    static getDerivedStateFromProps(props: iProps, state: iStates): iStates | null;
    private _renderTitle;
    private _renderBody;
    render(): React.JSX.Element;
}
export {};
