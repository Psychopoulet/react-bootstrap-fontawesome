import * as React from "react";
import type { iPropsNode, tVariant } from "../types";
interface iPropsCardHeader extends iPropsNode {
    "justify"?: boolean;
}
export default class CardHeader extends React.PureComponent<iPropsCardHeader> {
    static displayName: string;
    static contextType: React.Context<tVariant>;
    render(): React.JSX.Element;
}
export {};
