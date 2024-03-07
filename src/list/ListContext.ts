"use strict";

// deps

    // externals
    import { Context, createContext } from "react";

// types & interfaces

    // locals
    import type { tVariant } from "../types";

// component

export const ListContext: Context<tVariant> = createContext(null as tVariant);

// name
ListContext.displayName = "ListContext";
