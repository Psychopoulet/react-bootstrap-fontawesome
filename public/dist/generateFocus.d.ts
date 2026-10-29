import * as React from "react";
export interface iGenerateFocusCallback<T extends HTMLElement> {
    "setFocus": () => void;
    "ref": React.RefObject<T>;
}
export default function generateFocus<T extends HTMLElement>(): iGenerateFocusCallback<T>;
