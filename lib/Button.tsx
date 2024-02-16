"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import Icon, { type tICon } from "./Icon";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant } from "./types";

// Props && States

    export interface iPropsButton extends iPropsNode {
        "type"?: "button" | "submit" | "reset";
        "variant"?: tVariant;
        "outline"?: boolean;
        "disabled"?: boolean;
        "block"?: boolean;
        "size"?: "sm" | "md" | "lg";
        "icon"?: tICon;
        "title"?: string;
        "onClick"?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    }

// component

export default class Button extends React.PureComponent<iPropsButton> {

    // name

    public static displayName: string = "Button";

    // constructor

    constructor (props: iPropsButton) {

        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    // events

    public handleClick (e: React.MouseEvent<HTMLButtonElement>): void {

        if ("function" === typeof this.props.onClick) {
            this.props.onClick(e);
        }
        else if ("button" === this.props.type) { // let "submit" & "reset" legit events do there jobs

            e.preventDefault();
            e.stopPropagation();

        }

    }

    // render

    public render (): JSX.Element {

        const disabled: boolean = !!this.props.disabled;

        let className: string = "btn";

        if (this.props.variant) {
            className += " " + (this.props.outline ? "btn-outline-" + this.props.variant : "btn-" + this.props.variant);
        }
        else {
            className += " " + (this.props.outline ? "btn-outline-primary" : "btn-primary");
        }

        if ("lg" === this.props.size) {
            className += " btn-lg";
        }
        else if ("sm" === this.props.size) {
            className += " btn-sm";
        }

        if (disabled) {
            className += " disabled";
        }

        if (!!this.props.block) {
            className += " col-12";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <button id={ this.props.id }
            role="button" type={ this.props.type ? this.props.type : "button" }
            className={ className } style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }
            title={ this.props.title } aria-label={ this.props.title }
            onClick={ this.handleClick }
        >
            { this.props.icon ? <Icon type={ this.props.icon } child></Icon> : null }
            { this.props.icon && this.props.children ? <>&nbsp;</> : null }
            { this.props.children }
        </button>;

    }

}
