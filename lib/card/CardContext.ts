"use strict";

// deps

    // externals
    import { Context, createContext } from "react";

    // locals
    import { tVariant } from "../types";

// component

export const CardContext: Context<tVariant> = createContext(null as tVariant);

// name
CardContext.displayName = "CardContext";
