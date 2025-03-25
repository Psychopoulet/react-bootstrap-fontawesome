import * as React from "react";
import type { iPropsNode } from "../types";
interface iPropsCardBody extends iPropsNode {
    "lead"?: boolean;
    "onSubmit"?: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
    "onMouseEnter"?: (e: React.MouseEvent<HTMLDivElement | HTMLFormElement>) => void;
    "onMouseLeave"?: (e: React.MouseEvent<HTMLDivElement | HTMLFormElement>) => void;
}
export default class CardBody extends React.PureComponent<iPropsCardBody> {
    static displayName: string;
    render(): React.JSX.Element;
}
export {};
