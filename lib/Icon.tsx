"use strict";

"use strict";

// deps

    // externals
    import * as React from "react";

    // locals
    import { iPropsNode, tVariant, tSize } from "./types";

// Props && States

    export interface iPropsIcon extends iPropsNode {
        "type": tICon;
        "variant"?: tVariant;
        "child"?: boolean;
        "title"?: string;
        "size"?: tSize;
    };

// types & interfaces

    export type tICon =
    | "android" | "apple" | "linux" | "windows"
    | "barcode" | "fingerprint" | "nfc"
    | "battery-empty" | "battery-quarter" | "battery-half" | "battery-three-quarters" | "battery-full"
    | "money-bill" | "credit-card"
    | "play" | "pause" | "stop"
    | "amazon" | "angular" | "asterisk" | "ban"
    | "check" | "circle" | "cog" | "edit" | "eye" | "file-invoice" | "gamepad" | "google" | "headset" | "hdd" | "lightbulb" | "lock" | "microchip"
    | "plug" | "plus" | "power" | "print"
    | "question" | "react" | "save" | "sync" | "times" | "trash" | "tv" | "unlock" | "usb" | "user" | "volume-up" | "wifi";

// consts

    const ICONS = {

        "android": "fab fa-android",
        "apple": "fab fa-apple",
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

        "play": "fas fa-play",
        "pause": "fas fa-pause",
        "stop": "fas fa-stop",

        "amazon": "fab fa-amazon",
        "angular": "fab fa-angular",
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
        "google": "fab fa-google",
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

};
