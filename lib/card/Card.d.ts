import * as React from "react";
import type { iPropsNode, tVariant } from "../types";
interface iPropsCard extends iPropsNode {
    "variant"?: tVariant;
    "onSubmit"?: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
}
export default class Card extends React.PureComponent<iPropsCard> {
    static displayName: string;
    render(): JSX.Element;
}
export {};
