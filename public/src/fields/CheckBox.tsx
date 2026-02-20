// deps

    // externals
    import * as React from "react";

// types & interfaces

    // locals
    import type { iPropsField } from "../types";

// Props && States

    interface iPropsCheckBox extends iPropsField {
        "checked"?: boolean;
        "onToogle"?: (e: React.ChangeEvent<HTMLInputElement>, newValue: boolean, oldValue: boolean) => void;
    }

    interface iPropsCheckBoxLabel extends iPropsCheckBox {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

// component

export class CheckBox extends React.PureComponent<iPropsCheckBox> {

    // name

    public static displayName: string = "CheckBox";

    // events

    protected _handleToogle (e: React.ChangeEvent<HTMLInputElement>): void {

        const value: boolean = e.target.checked;

        if (value === this.props.checked) {
            return;
        }

        if ("function" === typeof this.props.onToogle) {
            this.props.onToogle(e, value, Boolean(this.props.checked));
        }

    }

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const checked: boolean = Boolean(this.props.checked);

        // render
        return <input id={ this.props.id } role="checkbox" type="checkbox"

            className={
                (this.props.className ? this.props.className : "")
                + (disabled ? " disabled" : "")
            }
            style={ this.props.style }
            disabled={ disabled } aria-disabled={ disabled }

            title={ this.props.label } aria-label={ this.props.label }

            checked={ checked } aria-checked={ checked }
            onChange={ this._handleToogle.bind(this) }

        />;

    }

}

export class CheckBoxLabel extends React.PureComponent<iPropsCheckBoxLabel> {

    // name

    public static displayName: string = "CheckBoxLabel";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const checked: boolean = Boolean(this.props.checked);

        // render
        return <div className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + (this.props.className ? " " + this.props.className : "")
            + (disabled ? " text-muted" : "")
        } style={ this.props.style }>

            <div className="form-check">

                <label className="form-check-label" aria-label={ this.props.label }>

                    <CheckBox id={ this.props.id }
                        className="form-check-input" disabled={ disabled }
                        label={ this.props.label }
                        checked={ checked }
                        onToogle={ this.props.onToogle }
                    />

                    { this.props.label }

                </label>

            </div>

        </div>;

    }

}

export class CheckBoxPrettierLabel extends React.PureComponent<iPropsCheckBoxLabel> {

    // name

    public static displayName: string = "CheckBoxPrettierLabel";

    // render

    public render (): React.JSX.Element {

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const checked: boolean = Boolean(this.props.checked);

        // render
        return <label className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] + " input-group" : "mb-3 input-group")
            + (this.props.className ? " input-group " + this.props.className : "")
            + (disabled ? " text-muted" : "")
        } style={ this.props.style }>

            <span className="input-group-text" aria-label={ this.props.label }>

                <CheckBox id={ this.props.id }
                    className="form-check-input" disabled={ disabled }
                    label={ this.props.label }
                    checked={ checked }
                    onToogle={ this.props.onToogle }
                />

            </span>

            <span className="input-group-text">{ this.props.label }</span>

        </label>;

    }

}
