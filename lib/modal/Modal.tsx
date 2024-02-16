"use strict";

// deps

    // externals
    import * as React from "react";
    import * as ReactDOM from "react-dom";

    // locals
    import { iPropsNode, tVariant, tSize } from "../types";
    import ModalBody from "./ModalBody";
    import ModalList from "./ModalList";
    import ModalFooter from "./ModalFooter";

// Props && States

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
    };

    interface iStatesModal {
        "appParent": HTMLElement;
        "backDrop": HTMLDivElement;
        "displayId": number;
    };

// types & interfaces

    interface iStyle {
        "display": "block" | "hide";
        "zIndex"?: number;
    }

// consts

    const ZINDEX_MODAL: number = 1050;

// component

export default class Modal extends React.Component<iPropsModal, iStatesModal> {

    // name

    public static displayName: string = "Modal";

    // statics

        public static OPENED_MODALS_COUNT: number = 0;

    // constructor

    public constructor (props: iPropsModal) {

        super(props);

        // states

        this.state = {
            "appParent": document.getElementById(props.appId) as HTMLElement,
            "backDrop": document.createElement("div"),
            "displayId": 0
        };

        // events handlers

        this.handleClose = this.handleClose.bind(this);

    }

    public componentWillMount () {

        Modal.OPENED_MODALS_COUNT += 2;

        this.setState({
            "displayId": Modal.OPENED_MODALS_COUNT
        });

    }

    public componentDidMount (): void {

        // parent

        this.state.appParent.classList.add("modal-open");

        // backDrop

        this.state.backDrop.classList.add("modal-backdrop");
        this.state.backDrop.classList.add("fade");
        this.state.backDrop.classList.add("show");

            this.state.backDrop.style.zIndex = String(ZINDEX_MODAL + this.state.displayId + 1);

        this.state.appParent.appendChild(this.state.backDrop);

    }

    public componentWillUnmount (): void {

        // backDrop

        this.state.backDrop.remove();

        Modal.OPENED_MODALS_COUNT -= 2;

        // parent

        this.state.appParent.classList.remove("modal-open");

    }

    // events

    public handleClose (e: React.MouseEvent<HTMLButtonElement>): void {

        if ("function" === typeof this.props.onClose) {
            this.props.onClose(e);
        }
        else {

            e.preventDefault();
            e.stopPropagation();

        }

    }

    // render

    private _renderContent (): JSX.Element {

        let className: string = "modal-dialog";

        if (!!this.props.centered) {
            className += " modal-dialog-centered";
        }

        if (!!this.props.scrollable) {
            className += " modal-dialog-scrollable";
        }

        if (this.props.size) {

            switch (this.props.size) {

                case "sm":
                    className += " modal-sm";
                break;

                case "lg":
                    className += " modal-lg";
                break;

                case "xl":
                    className += " modal-xl";
                break;

            }

        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <div className={ className } style={ this.props.style }>

            <div className={
                "modal-content" +
                (this.props.variant ? " border-" + this.props.variant + " text-" + this.props.variant : "")
            }>

                {

                    this.props.title || "function" === typeof this.props.onClose ? <div className={
                        "modal-header" +
                        (this.props.variant ? " border-" + this.props.variant : "")
                    }>

                        { this.props.title ? <h5 className="modal-title">{ this.props.title }</h5> : null }

                        {
                            "function" === typeof this.props.onClose ?
                                <button type="button" className="btn-close" title="close" data-bs-dismiss="modal" aria-label="Close" onClick={ this.props.onClose }></button> :
                                null
                        }

                    </div> : null

                }

                    {
                        React.Children.toArray(this.props.children).filter((child: any): boolean => {

                            return ModalBody === child.type
                                || ModalList === child.type
                                || ModalFooter === child.type;

                        })
                    }

            </div>

        </div>;

    }

    public render (): JSX.Element {

        const style: iStyle = { "display": "block" };

        style.zIndex = ZINDEX_MODAL + this.state.displayId + 2;

        if ("function" === typeof this.props.onSubmit) {

            return ReactDOM.createPortal(
                <form id={ this.props.id } aria-modal="true" role="dialog"
                    className="modal fade show" tabIndex={ -1 } style={ style }
                    onSubmit={ this.props.onSubmit }
                >
                    { this._renderContent() }
                </form>,
                document.getElementById(this.props.appId) as HTMLElement
            );

        }
        else {

            return ReactDOM.createPortal(
                <div id={ this.props.id } aria-modal="true" role="dialog"
                    className="modal fade show" tabIndex={ -1 } style={ style }
                >
                    { this._renderContent() }
                </div>,
                document.getElementById(this.props.appId) as HTMLElement
            );

        }

    }

}
