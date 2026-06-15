// deps
// externals
import * as React from "react";
// locals
import { InputText } from "../InputText";
import ListItem from "../../list/ListItem";
import Button from "../../Button";
// component
export default class InputArrayLine extends React.Component {
    // name
    static displayName = "InputArrayLine";
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            "value": props.value
        };
    }
    // lifecycle
    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                "value": this.props.value
            });
        }
    }
    // events
    _handleChange = (e, newValue) => {
        this.setState({
            "value": newValue
        });
    };
    _handleBlur = (e) => {
        if (this.props.value !== this.state.value) {
            this.props.onLineChange(e, this.props.index, this.state.value, this.props.value, "blur");
        }
    };
    _handleKeyDown = (e) => {
        if ("Enter" === e.key && this.props.value !== this.state.value) {
            this.props.onLineChange(e, this.props.index, this.state.value, this.props.value, "enter");
        }
    };
    _handleDelete = (e) => {
        this.props.onLineDelete(e, this.props.index, this.props.value);
    };
    // render
    render() {
        const { index, disabled, inputRef } = this.props;
        return React.createElement(ListItem, { justify: true, key: index },
            React.createElement(InputText, { _ref: inputRef, disabled: disabled, value: this.state.value, onChange: this._handleChange, onBlur: this._handleBlur, onKeyDown: this._handleKeyDown }),
            React.createElement(Button, { title: "Delete item n°" + index, className: "ms-3", icon: "trash", variant: "danger", size: "sm", disabled: disabled, onClick: this._handleDelete }));
    }
}
