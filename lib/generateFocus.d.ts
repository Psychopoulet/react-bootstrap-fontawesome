import * as React from "react";
export type tGenerateFocusCallback = {
    setFocus: () => void;
    ref: React.RefObject<HTMLInputElement>;
};
export default function generateFocus(): tGenerateFocusCallback;
