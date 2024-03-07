import * as React from "react";
import type { iPropsNode, tSize, tVariant } from "../types";
interface iPropsModal extends iPropsNode {
    "appId": string;
    "id"?: string;
    "title"?: string;
    "centered"?: boolean;
    "scrollable"?: boolean;
    "size"?: tSize;
    "variant"?: tVariant;
    "onClose"?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    "onSubmit"?: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
}
interface iStatesModal {
    "appParent": HTMLElement;
    "backDrop": HTMLDivElement;
    "displayId": number;
}
export default class Modal extends React.Component<iPropsModal, iStatesModal> {
    static displayName: string;
    static OPENED_MODALS_COUNT: number;
    constructor(props: iPropsModal);
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClose(e: React.MouseEvent<HTMLButtonElement>): void;
    private _renderContent;
    render(): JSX.Element;
}
export {};
