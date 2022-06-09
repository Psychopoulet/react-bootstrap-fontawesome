"use strict";

// deps

	// externals
	import * as React from "react";

	// externals
	import { iPropsNode } from "../types";

// Props && States

	interface iPropsInvalidFeedBack extends iPropsNode {
		"alert": string;
	};

	interface iPropsInvalidFeedBackMin extends iPropsNode {
		"min": number;
		"current": number;
	};

	interface iPropsInvalidFeedBackMax extends iPropsNode {
		"max": number;
		"current": number;
	};

// component

export class InvalidFeedBack extends React.PureComponent<iPropsInvalidFeedBack> {

	// name

	public static displayName: string = "InvalidFeedBack";

	// render

	public render (): JSX.Element {

		return <small id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style }>
			{ this.props.alert }
		</small>;

	}

};

export class InvalidFeedBackRequired extends React.PureComponent<iPropsNode> {

	// name

	public static displayName: string = "InvalidFeedBackRequired";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style } alert={
			"Content required"
		} />;

	}

};

export class InvalidFeedBackFloat extends React.PureComponent<iPropsNode> {

	// name

	public static displayName: string = "InvalidFeedBackFloat";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style } alert={
			"Content must be an float"
		} />;

	}

};

export class InvalidFeedBackInteger extends React.PureComponent<iPropsNode> {

	// name

	public static displayName: string = "InvalidFeedBackInteger";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style } alert={
			"Content must be an integer"
		} />;

	}

};

export class InvalidFeedBackMin extends React.PureComponent<iPropsInvalidFeedBackMin> {

	// name

	public static displayName: string = "InvalidFeedBackMin";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style } alert={
			"Content must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")"
		} />;

	}

};

export class InvalidFeedBackMax extends React.PureComponent<iPropsInvalidFeedBackMax> {

	// name

	public static displayName: string = "InvalidFeedBackMax";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style } alert={
			"Content must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")"
		} />;

	}

};

export class InvalidFeedBackMinLength extends React.PureComponent<iPropsInvalidFeedBackMin> {

	// name

	public static displayName: string = "InvalidFeedBackMinLength";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style } alert={
			"Content length must be higher than / equal to : " + this.props.min + " (current : " + this.props.current + ")"
		} />;

	}

};

export class InvalidFeedBackMaxLength extends React.PureComponent<iPropsInvalidFeedBackMax> {

	// name

	public static displayName: string = "InvalidFeedBackMaxLength";

	// render

	public render (): JSX.Element {

		return <InvalidFeedBack id={ this.props.id } className={ "form-text text-danger" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style } alert={
			"Content length must be lower than / equal to : " + this.props.max + " (current : " + this.props.current + ")"
		} />;

	}

};
