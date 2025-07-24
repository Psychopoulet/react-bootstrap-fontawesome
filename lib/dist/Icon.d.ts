import * as React from "react";
import type { iPropsNode, tVariant, tSize } from "./types";
export type tIcon = "amazon" | "angular" | "android" | "apple" | "google" | "linux" | "react" | "windows" | "barcode" | "fingerprint" | "nfc" | "battery-empty" | "battery-quarter" | "battery-half" | "battery-three-quarters" | "battery-full" | "money-bill" | "credit-card" | "play" | "pause" | "stop" | "toggle-on" | "toggle-off" | "volume-down" | "volume-up" | "lock" | "unlock" | "asterisk" | "ban" | "check" | "circle" | "cog" | "edit" | "eye" | "file-invoice" | "gamepad" | "headset" | "hdd" | "lightbulb" | "mask-face" | "microchip" | "plug" | "plus" | "power" | "print" | "question" | "save" | "sync" | "times" | "trash" | "tv" | "usb" | "user" | "wifi";
export interface iPropsIcon extends iPropsNode {
    "type": tIcon;
    "variant"?: tVariant;
    "child"?: boolean;
    "title"?: string;
    "size"?: tSize;
}
export default class Icon extends React.PureComponent<iPropsIcon> {
    static displayName: string;
    render(): React.JSX.Element;
}
