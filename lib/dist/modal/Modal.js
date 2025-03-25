"use strict";
// deps
// externals
import * as React from "react";
import * as ReactDOM from "react-dom";
// locals
import MaxHeightContent from "../MaxHeightContent";
import ModalBody from "./ModalBody";
import ModalImage from "./ModalImage";
import ModalList from "./ModalList";
import ModalTable from "./ModalTable";
import ModalFooter from "./ModalFooter";
// consts
const ZINDEX_MODAL = 1050;
// component
class Modal extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        // states
        this.state = {
            "appParent": document.getElementById(props.appId),
            "backDrop": document.createElement("div"),
            "displayId": 0
        };
    }
    componentWillMount() {
        Modal.OPENED_MODALS_COUNT += 2;
        this.setState({
            "displayId": Modal.OPENED_MODALS_COUNT
        });
    }
    componentDidMount() {
        // parent
        this.state.appParent.classList.add("modal-open");
        // backDrop
        this.state.backDrop.classList.add("modal-backdrop");
        this.state.backDrop.classList.add("fade");
        this.state.backDrop.classList.add("show");
        this.state.backDrop.style.zIndex = String(ZINDEX_MODAL + this.state.displayId + 1);
        this.state.appParent.appendChild(this.state.backDrop);
    }
    componentWillUnmount() {
        // backDrop
        this.state.backDrop.remove();
        Modal.OPENED_MODALS_COUNT -= 2;
        // parent
        this.state.appParent.classList.remove("modal-open");
    }
    // render
    _renderContent() {
        let className = "modal-dialog";
        if (Boolean(this.props.centered)) {
            className += " modal-dialog-centered";
        }
        if (Boolean(this.props.scrollable)) {
            className += " modal-dialog-scrollable";
        }
        if (this.props.size) {
            switch (this.props.size) {
                case "sm":
                    className += " modal-sm";
                    break;
                case "md":
                    className += " modal-md";
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
        return React.createElement("div", { className: className, style: this.props.style },
            React.createElement("div", { className: "modal-content"
                    + (this.props.variant ? " border-" + this.props.variant + " text-" + this.props.variant : "") },
                this.props.title || "function" === typeof this.props.onClose
                    ? React.createElement("div", { className: "modal-header"
                            + (this.props.variant ? " border-" + this.props.variant : "") },
                        this.props.title ? React.createElement("h5", { className: "modal-title" }, this.props.title) : undefined,
                        "function" === typeof this.props.onClose
                            ? React.createElement("button", { type: "button", className: "btn-close", title: "close", "data-bs-dismiss": "modal", "aria-label": "Close", onClick: this.props.onClose })
                            : undefined)
                    : undefined,
                React.Children.toArray(this.props.children).filter((child) => {
                    return MaxHeightContent === child.type
                        || ModalBody === child.type
                        || ModalImage === child.type
                        || ModalList === child.type
                        || ModalTable === child.type
                        || ModalFooter === child.type;
                })));
    }
    render() {
        const style = { "display": "block" };
        style.zIndex = ZINDEX_MODAL + this.state.displayId + 2;
        if ("function" === typeof this.props.onSubmit) {
            return ReactDOM.createPortal(React.createElement("form", { id: this.props.id, "aria-modal": "true", role: "dialog", className: "modal fade show", tabIndex: -1, style: style, onSubmit: this.props.onSubmit }, this._renderContent()), document.getElementById(this.props.appId));
        }
        else {
            return ReactDOM.createPortal(React.createElement("div", { id: this.props.id, "aria-modal": "true", role: "dialog", className: "modal fade show", tabIndex: -1, style: style }, this._renderContent()), document.getElementById(this.props.appId));
        }
    }
}
// name
Modal.displayName = "Modal";
// statics
Modal.OPENED_MODALS_COUNT = 0;
export default Modal;
