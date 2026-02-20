// deps

    // externals
    import { createContext } from "react";

// types & interfaces

    // externals
    import type { Context } from "react";

    // locals
    import type { tVariant } from "../types";

// component

export const ListContext: Context<tVariant> = createContext(null as tVariant);

// name
ListContext.displayName = "ListContext";
