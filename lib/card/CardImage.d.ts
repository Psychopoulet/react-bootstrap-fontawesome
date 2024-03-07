import * as React from "react";
import { type iPropsImage } from "../Image";
interface iPropsCardImage extends iPropsImage {
    "position"?: "top" | "bottom";
}
export default class CardImage extends React.PureComponent<iPropsCardImage> {
    static displayName: string;
    render(): JSX.Element;
}
export {};
