"use strict";

// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant, tSize } from "./types";

    export type tIcon =
    | "amazon" | "angular" | "android" | "apple" | "google" | "linux" | "windows"
    | "barcode" | "fingerprint" | "nfc"
    | "battery-empty" | "battery-quarter" | "battery-half" | "battery-three-quarters" | "battery-full"
    | "money-bill" | "credit-card"
    | "mask-face"
    | "play" | "pause" | "stop"
    | "asterisk" | "ban"
    | "check" | "circle" | "cog" | "edit" | "eye" | "file-invoice" | "gamepad" | "headset" | "hdd" | "lightbulb" | "lock" | "microchip"
    | "plug" | "plus" | "power" | "print"
    | "question" | "react" | "save" | "sync" | "times" | "toggle-on" | "toggle-off" | "trash" | "tv" | "unlock" | "usb" | "user" | "volume-up" | "wifi";

// Props && States

    export interface iPropsIcon extends iPropsNode {
        "type": tIcon;
        "variant"?: tVariant;
        "child"?: boolean;
        "title"?: string;
        "size"?: tSize;
    }

// consts

    const ICONS = {

        "amazon": "fab fa-amazon",
        "android": "fab fa-android",
        "angular": "fab fa-angular",
        "apple": "fab fa-apple",
        "google": "fab fa-google",
        "linux": "fab fa-linux",
        "windows": "fab fa-windows",

        "barcode": "fa fa-barcode",
        "fingerprint": "fa fa-fingerprint",
        "nfc": "fa-brands fa-nfc-symbol",

        "battery-empty": "fas fa-battery-empty",
        "battery-quarter": "fas fa-battery-quarter",
        "battery-half": "fas fa-battery-half",
        "battery-three-quarters": "fas fa-battery-three-quarters",
        "battery-full": "fas fa-battery-full",

        "credit-card": "far fa-credit-card",
        "money-bill": "fas fa-money-bill",

        "mask-face": "fas fa-mask-face",

        "play": "fas fa-play",
        "pause": "fas fa-pause",
        "stop": "fas fa-stop",

        "asterisk": "fas fa-asterisk",
        "ban": "fas fa-ban",
        "check": "fas fa-check",
        "circle": "fas fa-circle",
        "cog": "fas fa-cog",
        "edit": "far fa-edit",
        "eye": "fas fa-eye",
        "file-invoice": "fas fa-file-invoice",
        "headset": "fas fa-headset",
        "hdd": "fas fa-hdd",
        "lightbulb": "far fa-lightbulb",
        "lock": "fas fa-lock",
        "gamepad": "fas fa-gamepad",
        "microchip": "fas fa-microchip",
        "plug": "fas fa-plug",
        "plus": "fas fa-plus",
        "power": "fas fa-power-off",
        "print": "fas fa-print",
        "question": "fas fa-question",
        "react": "fab fa-react",
        "save": "fas fa-save",
        "sync": "fas fa-sync",
        "times": "fas fa-times",
        "toggle-on": "fas fa-toggle-on",
        "toggle-off": "fas fa-toggle-off",
        "trash": "fas fa-trash",
        "tv": "fas fa-tv",
        "unlock": "fas fa-unlock",
        "usb": "fab fa-usb",
        "user": "fas fa-user",
        "volume-up": "fas fa-volume-up",
        "wifi": "fas fa-wifi"
    };

// component

export default class Icon extends React.PureComponent<iPropsIcon> {

    // name

    public static displayName: string = "Icon";

    // render

    public render (): JSX.Element {

        let className: string = ICONS[this.props.type];

        if (this.props.variant) {
            className += " text-" + this.props.variant;
        }
        else if (!this.props.child) {
            className += " text-body";
        }

        if (this.props.size) {

            switch (this.props.size) {

                case "sm":
                    className += " fs-6";
                break;

                case "md":
                    className += " fs-4";
                break;

                case "lg":
                    className += " fs-2";
                break;

                case "xl":
                    className += " fs-1";
                break;

                default:
                    // nothing to do
                break;

            }

        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        return <span id={ this.props.id } title={ this.props.title } className={ className } style={ this.props.style }></span>;

    }

}
