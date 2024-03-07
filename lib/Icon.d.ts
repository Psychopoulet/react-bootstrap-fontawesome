import * as React from "react";
import type { iPropsNode, tVariant, tSize } from "./types";
export type tICon = "android" | "apple" | "linux" | "windows" | "barcode" | "fingerprint" | "nfc" | "battery-empty" | "battery-quarter" | "battery-half" | "battery-three-quarters" | "battery-full" | "money-bill" | "credit-card" | "play" | "pause" | "stop" | "amazon" | "angular" | "asterisk" | "ban" | "check" | "circle" | "cog" | "edit" | "eye" | "file-invoice" | "gamepad" | "google" | "headset" | "hdd" | "lightbulb" | "lock" | "microchip" | "plug" | "plus" | "power" | "print" | "question" | "react" | "save" | "sync" | "times" | "trash" | "tv" | "unlock" | "usb" | "user" | "volume-up" | "wifi";
export interface iPropsIcon extends iPropsNode {
    "type": tICon;
    "variant"?: tVariant;
    "child"?: boolean;
    "title"?: string;
    "size"?: tSize;
}
export default class Icon extends React.PureComponent<iPropsIcon> {
    static displayName: string;
    render(): JSX.Element;
}
