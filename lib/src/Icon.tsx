"use strict";

// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsNode, tVariant, tSize } from "./types";

    export type tIcon =

        // brands
        | "amazon" | "angular" | "android" | "apple" | "google" | "linux" | "react" | "windows"

        // com
        | "barcode" | "fingerprint" | "nfc"

        // battery
        | "battery-empty" | "battery-quarter" | "battery-half" | "battery-three-quarters" | "battery-full"

        // money
        | "money-bill" | "credit-card"

        // reader
        | "play" | "pause" | "stop"

        // toggle
        | "toggle-on" | "toggle-off"

        // volume
        | "volume-down" | "volume-up"

        // lock
        | "lock" | "unlock"

        // others
        | "asterisk" | "ban"
        | "check" | "circle" | "cog" | "edit" | "eye" | "file-invoice" | "gamepad" | "headset" | "hdd" | "lightbulb" | "mask-face" | "microchip"
        | "plug" | "plus" | "power" | "print"
        | "question" | "save" | "sync" | "times" | "trash" | "tv" | "usb" | "user" | "wifi";

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

        // brands
        "amazon": "fab fa-amazon",
        "android": "fab fa-android",
        "angular": "fab fa-angular",
        "apple": "fab fa-apple",
        "google": "fab fa-google",
        "linux": "fab fa-linux",
        "react": "fab fa-react",
        "windows": "fab fa-windows",

        // com
        "barcode": "fa fa-barcode",
        "fingerprint": "fa fa-fingerprint",
        "nfc": "fa-brands fa-nfc-symbol",

        // battery
        "battery-empty": "fas fa-battery-empty",
        "battery-quarter": "fas fa-battery-quarter",
        "battery-half": "fas fa-battery-half",
        "battery-three-quarters": "fas fa-battery-three-quarters",
        "battery-full": "fas fa-battery-full",

        // money
        "credit-card": "far fa-credit-card",
        "money-bill": "fas fa-money-bill",

        // reader
        "play": "fas fa-play",
        "pause": "fas fa-pause",
        "stop": "fas fa-stop",

        // toggle
        "toggle-on": "fas fa-toggle-on",
        "toggle-off": "fas fa-toggle-off",

        // volume
        "volume-down": "fas fa-volume-down",
        "volume-up": "fas fa-volume-up",

        // lock
        "lock": "fas fa-lock",
        "unlock": "fas fa-unlock",

        // others
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
        "gamepad": "fas fa-gamepad",
        "mask-face": "fas fa-mask-face",
        "microchip": "fas fa-microchip",
        "plug": "fas fa-plug",
        "plus": "fas fa-plus",
        "power": "fas fa-power-off",
        "print": "fas fa-print",
        "question": "fas fa-question",
        "save": "fas fa-save",
        "sync": "fas fa-sync",
        "times": "fas fa-times",
        "trash": "fas fa-trash",
        "tv": "fas fa-tv",
        "usb": "fab fa-usb",
        "user": "fas fa-user",
        "wifi": "fas fa-wifi"
    };

// component

export default class Icon extends React.PureComponent<iPropsIcon> {

    // name

    public static displayName: string = "Icon";

    // render

    public render (): React.JSX.Element {

        const isChild: boolean = "boolean" === typeof this.props.child && this.props.child;

        let className: string = ICONS[this.props.type];

        if ("string" === typeof this.props.variant) {
            className += " text-" + this.props.variant;
        }
        else if (!isChild) {
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

        if ("string" === typeof this.props.className) {
            className += " " + this.props.className;
        }

        return <span id={ this.props.id } title={ this.props.title } className={ className } style={ this.props.style }></span>;

    }

}
