"use strict";

// deps

	// externals
	import * as React from "react";

// interfaces

	export type tGenerateFocusCallback = { setFocus: () => void, ref: React.RefObject<HTMLInputElement> };

// component

export default function generateFocus (): tGenerateFocusCallback {

	const ref: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

	const setFocus = (): void => {
		ref.current && ref.current.focus();
	};

	return { setFocus, ref };

};
