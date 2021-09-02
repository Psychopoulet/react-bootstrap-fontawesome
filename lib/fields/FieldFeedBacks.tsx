"use strict";

// deps

	// externals
	import * as React from "react";

// Props && States

	interface iPropsInvalidFeedBack {
		"alert": string;
	};

	interface iPropsInvalidFeedBackMin {
		"min": number;
		"current": number;
	};

	interface iPropsInvalidFeedBackMax {
		"max": number;
		"current": number;
	};

// component

export class InvalidFeedBack extends React.PureComponent<iPropsInvalidFeedBack> {

	// name

	public static displayName: string = "InvalidFeedBack";

	// render

	public render (): JSX.Element {

		return <small className="form-text text-danger">
			{ this.props.alert }
		</small>;

	}

};

export class InvalidFeedBackRequired extends React.PureComponent {

	// name

	public static displayName: string = "InvalidFeedBackRequired";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack alert={
			"Content required"
		} />;

	}

};

export class InvalidFeedBackInteger extends React.PureComponent {

	// name

	public static displayName: string = "InvalidFeedBackInteger";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack alert={
			"Content must be an integer"
		} />;

	}

};

export class InvalidFeedBackMin extends React.PureComponent<iPropsInvalidFeedBackMin> {

	// name

	public static displayName: string = "InvalidFeedBackMin";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack alert={
			"Content must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")"
		} />;

	}

};

export class InvalidFeedBackMax extends React.PureComponent<iPropsInvalidFeedBackMax> {

	// name

	public static displayName: string = "InvalidFeedBackMax";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack alert={
			"Content must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")"
		} />;

	}

};

export class InvalidFeedBackMinLength extends React.PureComponent<iPropsInvalidFeedBackMin> {

	// name

	public static displayName: string = "InvalidFeedBackMinLength";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack alert={
			"Content length must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")"
		} />;

	}

};

export class InvalidFeedBackMaxLength extends React.PureComponent<iPropsInvalidFeedBackMax> {

	// name

	public static displayName: string = "InvalidFeedBackMaxLength";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack alert={
			"Content length must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")"
		} />;

	}

};
