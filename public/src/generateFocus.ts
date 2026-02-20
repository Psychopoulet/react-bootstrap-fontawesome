// deps

    // externals
    import * as React from "react";

// interfaces

    export interface iGenerateFocusCallback<T extends HTMLElement | null = HTMLElement | null> {
        "setFocus": () => void;
        "ref": React.RefObject<T>;
    }

// component

export default function generateFocus<T extends HTMLElement | null = HTMLElement | null> (): iGenerateFocusCallback<T> {

    const ref: React.RefObject<T> = React.createRef<T>() as React.RefObject<T>;

    function setFocus (): void {

        if (ref.current && "function" === typeof ref.current.focus) {
            ref.current.focus();
        }

    }

    return { setFocus, ref };

}
