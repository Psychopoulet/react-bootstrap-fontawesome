// deps

    // externals
    import * as React from "react";

// interfaces

    export interface iGenerateFocusCallback {
        "setFocus": () => void;
        "ref": React.RefObject<HTMLElement | null>;
    }

// component

export default function generateFocus (): iGenerateFocusCallback {

    const ref: React.RefObject<HTMLElement | null> = React.createRef();

    function setFocus (): void {

        if (ref.current) {
            ref.current.focus();
        }

    }

    return {
        setFocus,
        ref
    };

}
