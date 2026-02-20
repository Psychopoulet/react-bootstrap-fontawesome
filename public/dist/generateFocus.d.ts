import * as React from "react";
export interface iGenerateFocusCallback {
    "setFocus": () => void;
    "ref": React.RefObject<HTMLInputElement>;
}
export default function generateFocus(): iGenerateFocusCallback;
