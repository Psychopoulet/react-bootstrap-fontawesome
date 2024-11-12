import * as React from "react";
import { type iPropsImage } from "../Image";
interface iPropsTableImage extends iPropsImage {
    "position"?: "top" | "bottom";
}
export default class ModalImage extends React.PureComponent<iPropsTableImage> {
    static displayName: string;
    render(): JSX.Element;
}
export {};
