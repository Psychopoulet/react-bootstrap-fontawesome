// deps

    // externals
    import { createContext } from "react";

// types & interfaces

    // externals
    import type { Context } from "react";

    // locals
    import type { tVariant } from "../types";

// component

export const CardContext: Context<tVariant> = createContext(null as tVariant);

// name
CardContext.displayName = "CardContext";
