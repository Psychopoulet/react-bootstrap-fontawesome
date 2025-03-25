"use strict";
// deps
// externals
import * as React from "react";
// component
export default function generateFocus() {
    const ref = React.createRef();
    const setFocus = () => {
        ref.current && ref.current.focus();
    };
    return { setFocus, ref };
}
