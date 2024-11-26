"use strict";

// deps

    // externals
    import * as React from "react";

    // locals

    import generateFocus from "../generateFocus";

    import Card from "../card/Card";
    import CardHeader from "../card/CardHeader";
    import CardBody from "../card/CardBody";
    import CardFooter from "../card/CardFooter";

    import { InputText } from "./InputText";

    import List from "../list/List";
    import ListItemHeader from "../list/ListItemHeader";
    import ListItem from "../list/ListItem";

    import Button from "../Button";

    import { InvalidFeedBackRequired } from "./FieldFeedBacks";

// types & interfaces

    // locals
    import type { iPropsInput } from "../types";
    import type { iGenerateFocusCallback } from "../generateFocus";

// Props && States

    export interface iPropsInputArray extends iPropsInput {
        "value"?: string[];
        "onChange"?: (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>, newValue: string[], oldValue: string[]) => void;
    }

    export interface iPropsInputArrayLabel extends iPropsInputArray {
        "label": string;
    }

// component

export class InputArray extends React.PureComponent<iPropsInputArray> {

    // name

        public static displayName: string = "InputArray";

    // private

        private _focus: iGenerateFocusCallback;

    // constructor

    public constructor (props: iPropsInputArray) {

        super(props);

        this._focus = generateFocus();

    }

    // events

    private _handleAddLine (e: React.MouseEvent<HTMLButtonElement>): void {

        const oldValues: string[] = "object" === typeof this.props.value && this.props.value instanceof Array ? this.props.value : [];

        const newValues: string[] = [
            ...oldValues,
            ""
        ];

        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, newValues, oldValues);
        }

        setTimeout((): void => {
            this._focus.setFocus();
        }, 200);

    }

    // render

    public render (): JSX.Element {

        const values: string[] = "object" === typeof this.props.value && this.props.value instanceof Array ? this.props.value : [];

        // props values
        const disabled: boolean = Boolean(this.props.disabled);

        // render
        return <List id={ this.props.id } className={ this.props.className } style={ this.props.style }>

            <ListItemHeader className={ 0 < values.length ? undefined : "m-0" }>

                <Button title="New line"
                    icon="plus" variant="success" block
                    onClick={ this._handleAddLine.bind(this) }
                >
                    New line
                </Button>

            </ListItemHeader>

            { values.map((line: string, key: number): JSX.Element => {

                const _handleChangeLine = (e: React.ChangeEvent<HTMLInputElement>, newValue: string): void => {

                    e.preventDefault();
                    e.stopPropagation();

                    if (undefined !== typeof values[key] && newValue !== values[key]) {

                        const lines: string[] = [ ...values ];

                            lines[key] = newValue;

                        if ("function" === typeof this.props.onChange) {
                            this.props.onChange(e, lines, values);
                        }

                    }

                };

                const _handleDeleteLine = (e: React.MouseEvent<HTMLButtonElement>): void => {

                    e.preventDefault();
                    e.stopPropagation();

                    if (undefined !== typeof values[key]) {

                        const lines: string[] = [ ...values ];

                            lines.splice(key, 1);

                        if ("function" === typeof this.props.onChange) {
                            this.props.onChange(e, lines, values);
                        }

                    }

                };

                return <ListItem justify key={ key }>

                    <InputText
                        _ref={ key === values.length - 1 ? this._focus.ref : undefined }
                        disabled={ disabled }
                        value={ line } onChange={ _handleChangeLine.bind(this) }
                    />

                    <Button title={ "Delete item n°" + key } className="ms-3"
                        icon="trash" variant="danger"
                        disabled={ disabled }
                        onClick={ _handleDeleteLine.bind(this) }
                    />

                </ListItem>;

            }) }

        </List>;

    }

}

export class InputArrayLabel extends React.PureComponent<iPropsInputArrayLabel> {

    // name

        public static displayName: string = "iPropsInputArrayLabel";

    // render

    public render (): JSX.Element {

        const values: string[] = "object" === typeof this.props.value && this.props.value instanceof Array ? this.props.value : [];

        // props values
        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        // controls

        let requiredValid: boolean = true;

        if (Boolean(this.props.emptyValidation)) {
            requiredValid = required ? 0 < values.length : true;
        }

        // render
        return <Card id={ this.props.id } className={
            "mb-3"
            + (this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <CardHeader>

                { this.props.label }

                { required
                    ? <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small>
                    : undefined
                }

            </CardHeader>

            <CardBody>

                <InputArray

                    required={ required } disabled={ disabled }

                    placeholder={ this.props.placeholder } label={ this.props.label }

                    value={ this.props.value }
                    onChange={ this.props.onChange }

                />

            </CardBody>

            { !requiredValid
                ? <CardFooter><InvalidFeedBackRequired /></CardFooter>
                : undefined
            }

        </Card>;

    }

}
