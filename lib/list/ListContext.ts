"use strict";

// deps

    // externals
    import { Context, createContext } from "react";

    // locals
    import { tVariant } from "../types";

// component

export const ListContext: Context<tVariant> = createContext(null as tVariant);

// name
ListContext.displayName = "ListContext";
