// deps

    // externals
    import * as React from "react";

    // locals

    import { InputText } from "../InputText";
    import ListItem from "../../list/ListItem";
    import Button from "../../Button";

// types & interfaces

    // locals
    import type { iPropsInput } from "../../types";

// Props && States

    interface iPropsInputArrayV2Line extends iPropsInput {
        "index": number;
        "value": string;
        "disabled": boolean;
        "inputRef"?: React.RefObject<HTMLInputElement>;
        "onLineChange": (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>, index: number, newValue: string, oldValue: string, handler: "blur" | "enter") => void;
        "onLineDelete": (e: React.MouseEvent<HTMLButtonElement>, index: number, newValue: string) => void;
    }

    export interface iPropsInputArrayV2Label extends iPropsInputArrayV2Line {
        "label": string;
        "margin-bottom"?: number; // to be able to remove the default one
    }

    interface iStateInputArrayV2Line {
        "value": string;
    }

// component

export default class InputArrayV2Line extends React.Component<iPropsInputArrayV2Line, iStateInputArrayV2Line> {

    // name

        public static displayName: string = "InputArrayV2Line";

    // constructor

    public constructor (props: iPropsInputArrayV2Line) {

        super(props);

        this.state = {
            "value": props.value
        };

    }

    // lifecycle

    public componentDidUpdate (prevProps: iPropsInputArrayV2Line): void {

        if (prevProps.value !== this.props.value) {

            this.setState({
                "value": this.props.value
            });

        }

    }

    // events

    private readonly _handleChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: string): void => {

        this.setState({
            "value": newValue
        });

    };

    private readonly _handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {

        if (this.props.value !== this.state.value) {
            this.props.onLineChange(e, this.props.index, this.state.value, this.props.value, "blur");
        }

    };

    private readonly _handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

        if ("Enter" === e.key) {

            if (this.props.value !== this.state.value) {
                this.props.onLineChange(e as React.KeyboardEvent<HTMLInputElement>, this.props.index, this.state.value, this.props.value, "enter");
            }

        }

    };

    private readonly _handleDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {

        this.props.onLineDelete(e, this.props.index, this.props.value);

    };

    // render

    public render (): React.JSX.Element {

        const { index, disabled, inputRef } = this.props;

        return <ListItem justify key={ index }>

            <InputText
                _ref={ inputRef }
                disabled={ disabled }
                value={ this.state.value }
                onChange={ this._handleChange }
                onBlur={ this._handleBlur }
                onKeyDown={ this._handleKeyDown }
            />

            <Button title={ "Delete item n°" + index } className="ms-3"
                icon="trash" variant="danger"
                disabled={ disabled }
                onClick={ this._handleDelete }
            />

        </ListItem>;

    }

}
