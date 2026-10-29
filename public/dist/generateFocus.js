// deps
// externals
import * as React from "react";
// component
export default function generateFocus() {
    const ref = React.createRef();
    function setFocus() {
        if ("object" === typeof ref.current && "function" === typeof ref.current.focus) {
            ref.current.focus();
        }
    }
    return { setFocus, ref };
}
