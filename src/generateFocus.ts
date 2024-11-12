"use strict";

// deps

    // externals
    import * as React from "react";

// interfaces

    export interface iGenerateFocusCallback {
        "setFocus": () => void;
        "ref": React.RefObject<HTMLInputElement>;
    }

// component

export default function generateFocus (): iGenerateFocusCallback {

    const ref: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    const setFocus = (): void => {
        ref.current && ref.current.focus();
    };

    return { setFocus, ref };

}
