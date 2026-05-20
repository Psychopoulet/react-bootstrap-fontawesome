// deps

    // externals
    import * as React from "react";

    // locals

    import generateFocus from "../generateFocus";

    import Card from "../card/Card";
    import CardHeader from "../card/CardHeader";
    import CardBody from "../card/CardBody";
    import CardFooter from "../card/CardFooter";

    import List from "../list/List";
    import ListItemHeader from "../list/ListItemHeader";

    import Button from "../Button";

    import InputArrayV2Line from "./utils/InputArrayV2Line";

    import { InvalidFeedBackRequired } from "./FieldFeedBacks";

// types & interfaces

    // locals
    import type { iPropsInput } from "../types";
    import type { iGenerateFocusCallback } from "../generateFocus";

// Props && States

    export interface iPropsInputArrayV2 extends iPropsInput {
        "value"?: string[];
        "onChange"?: (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>, newValue: string[], oldValue: string[]) => void;
        "onAddLine"?: (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>, index: number, newValue: string) => void;
        "onDeleteLine"?: (e: React.MouseEvent<HTMLButtonElement>, index: number, value: string) => void;
    }

    export interface iPropsInputArrayV2Label extends iPropsInputArrayV2 {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

    export interface iStateInputArrayV2 {
        "values": string[];
    }

// private

    function _normalizeValues (value: string[] | undefined): string[] {

        return "object" === typeof value && value instanceof Array ? [ ...value ] : [];

    }

    function _valuesEqual (a: string[], b: string[]): boolean {

        if (a.length !== b.length) {
            return false;
        }

        for (let i: number = 0; i < a.length; ++i) {

            if (a[i] !== b[i]) {
                return false;
            }

        }

        return true;

    }

// component

export class InputArrayV2 extends React.Component<iPropsInputArrayV2, iStateInputArrayV2> {

    // name

        public static displayName: string = "InputArrayV2";

    // private

        private readonly _focus: iGenerateFocusCallback<HTMLInputElement>;
        protected _addingLineIndex: number | null = null;

    // constructor

    public constructor (props: iPropsInputArrayV2) {

        super(props);

        this._focus = generateFocus();
        this._addingLineIndex = null;

        this.state = {
            "values": _normalizeValues(props.value)
        };

    }

    // lifecycle

    public componentDidUpdate (prevProps: iPropsInputArrayV2): void {

        const prevPropValues: string[] = _normalizeValues(prevProps.value);
        const nextPropValues: string[] = _normalizeValues(this.props.value);

        if (!_valuesEqual(prevPropValues, nextPropValues)) {

            console.log("InputArrayV2", "componentDidUpdate", prevProps.value, this.props.value);

            this.setState({
                "values": nextPropValues
            });

        }

    }

    // events

    private readonly _handleAddLine = (e: React.MouseEvent<HTMLButtonElement>): void => {

        this._addingLineIndex = this.state.values.length;

        this.setState({
            "values": [
                ...this.state.values,
                ""
            ]
        });

        setTimeout((): void => {
            this._focus.setFocus();
        }, 200);

    };

    private readonly _handleLineChange = (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>, index: number, newValue: string, oldValue: string): void => {

        e.preventDefault();
        e.stopPropagation();

        console.log("InputArrayV2", "_handleLineChange", index, newValue, oldValue);

        if ("undefined" !== typeof this.state.values[index] && newValue !== this.state.values[index]) {

            if ("number" === typeof this._addingLineIndex && index === this._addingLineIndex) {

                this._addingLineIndex = null;

                console.log("InputArrayV2", "onAddLine", index, newValue);

                if ("function" === typeof this.props.onAddLine) {
                    this.props.onAddLine(e, index, newValue);
                }

            }

            const newValues: string[] = [ ...this.state.values ];
            const oldValues: string[] = [ ...this.state.values ];

                newValues[index] = newValue;

            this.setState({
                "values": newValues
            });

            console.log("InputArrayV2", "onChange", newValues, oldValues);

            if ("function" === typeof this.props.onChange) {
                this.props.onChange(e, newValues, oldValues);
            }

        }

    };

    private readonly _handleLineDelete = (e: React.MouseEvent<HTMLButtonElement>, index: number): void => {

        if ("undefined" === typeof this.state.values[index]) {
            return;
        }

        const deletedValue: string = this.state.values[index];

        if ("function" === typeof this.props.onDeleteLine) {
            this.props.onDeleteLine(e, index, deletedValue);
        }

        const lines: string[] = [ ...this.state.values ];

            lines.splice(index, 1);

        this.setState({
            "values": lines
        });

        if ("function" === typeof this.props.onChange) {
            this.props.onChange(e, lines, [ ...this.state.values ]);
        }

    };

    // render

    public render (): React.JSX.Element {

        const disabled: boolean = "boolean" === typeof this.props.disabled && this.props.disabled;
        const lastIndex: number = this.state.values.length - 1;

        return <List id={ this.props.id } className={ this.props.className } style={ this.props.style }>

            <ListItemHeader className={ 0 < this.state.values.length ? undefined : "m-0" }>

                <Button title="New line"
                    icon="plus" variant="success" block
                    disabled={ disabled }
                    onClick={ this._handleAddLine }
                >
                    New line
                </Button>

            </ListItemHeader>

            { this.state.values.map((line: string, index: number): React.JSX.Element => {

                return <InputArrayV2Line
                    key={ index }
                    index={ index }
                    value={ line }
                    disabled={ disabled }
                    inputRef={ index === lastIndex ? this._focus.ref : undefined }
                    onLineChange={ this._handleLineChange }
                    onLineDelete={ this._handleLineDelete }
                />;

            }) }

        </List>;

    }

}

export class InputArrayV2Label extends React.PureComponent<iPropsInputArrayV2Label> {

    // name

        public static displayName: string = "InputArrayV2Label";

    // render

    public render (): React.JSX.Element {

        const values: string[] = _normalizeValues(this.props.value);

        const disabled: boolean = Boolean(this.props.disabled);
        const required: boolean = Boolean(this.props.required);

        let requiredValid: boolean = true;

        if ("boolean" === typeof this.props.emptyValidation && this.props.emptyValidation) {
            requiredValid = required ? 0 < values.length : true;
        }

        return <Card id={ this.props.id } className={
            ("undefined" !== typeof this.props["margin-bottom"] ? "mb-" + this.props["margin-bottom"] : "mb-3")
            + ("string" === typeof this.props.className ? " " + this.props.className : "")
        } style={ this.props.style }>

            <CardHeader>

                { this.props.label }

                { required && <small className="fa fa-asterisk text-danger" style={{ "fontSize": "60%" }} aria-hidden="true"></small> }

            </CardHeader>

            <CardBody>

                <InputArrayV2

                    required={ required } disabled={ disabled }

                    placeholder={ this.props.placeholder } label={ this.props.label }

                    value={ this.props.value }
                    onChange={ this.props.onChange }
                    onAddLine={ this.props.onAddLine }
                    onDeleteLine={ this.props.onDeleteLine }

                />

            </CardBody>

            { !requiredValid && <CardFooter><InvalidFeedBackRequired /></CardFooter> }

        </Card>;

    }

}
