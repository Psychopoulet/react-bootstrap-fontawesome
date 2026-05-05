import * as React from "react";
export interface iGenerateFocusCallback<T extends HTMLElement | null = HTMLElement | null> {
    "setFocus": () => void;
    "ref": React.RefObject<T>;
}
export default function generateFocus<T extends HTMLElement | null = HTMLElement | null>(): iGenerateFocusCallback<T>;
