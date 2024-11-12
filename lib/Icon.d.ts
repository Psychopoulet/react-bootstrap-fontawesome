import * as React from "react";
import type { iPropsNode, tVariant, tSize } from "./types";
export type tIcon = "amazon" | "angular" | "android" | "apple" | "google" | "linux" | "windows" | "barcode" | "fingerprint" | "nfc" | "battery-empty" | "battery-quarter" | "battery-half" | "battery-three-quarters" | "battery-full" | "money-bill" | "credit-card" | "mask-face" | "play" | "pause" | "stop" | "asterisk" | "ban" | "check" | "circle" | "cog" | "edit" | "eye" | "file-invoice" | "gamepad" | "headset" | "hdd" | "lightbulb" | "lock" | "microchip" | "plug" | "plus" | "power" | "print" | "question" | "react" | "save" | "sync" | "times" | "toggle-on" | "toggle-off" | "trash" | "tv" | "unlock" | "usb" | "user" | "volume-up" | "wifi";
export interface iPropsIcon extends iPropsNode {
    "type": tIcon;
    "variant"?: tVariant;
    "child"?: boolean;
    "title"?: string;
    "size"?: tSize;
}
export default class Icon extends React.PureComponent<iPropsIcon> {
    static displayName: string;
    render(): JSX.Element;
}
