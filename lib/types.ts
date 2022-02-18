"use strict";

export interface iPropsNode {
	"id"?: string;
	"className"?: string;
	"style"?: { [key: string]: string };
};

	export interface iPropsField extends iPropsNode {
		"name"?: string;
		"label"?: string;
		"disabled"?: boolean;
		"required"?: boolean;
	};

		export interface iPropsInput extends iPropsField {
			"placeholder"?: string;
			"emptyValidation"?: boolean;
			"_ref"?: React.RefObject<HTMLInputElement>;
			"onKeyDown"?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
		};

export type tVariant = null | undefined | "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "link";

export type tSize = null | undefined | "sm" | "md" | "lg" | "xl";
