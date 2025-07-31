"use strict";
// deps
// externals
import React from "react";
// internals
import Card from "./card/Card";
import CardHeader from "./card/CardHeader";
import CardBody from "./card/CardBody";
// component
class SoundReader extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        // states
        const newSrc = props.src.trim();
        this.state = {
            "src": newSrc
        };
    }
    static getDerivedStateFromProps(props, state) {
        // props.src = new src
        // state.src = old src
        if (props.src !== state.src) { // src changed
            const newSrc = props.src.trim();
            return {
                "src": newSrc
            };
        }
        return null;
    }
    // render
    _renderTitle() {
        if (this.props.title && 0 < this.props.title.length) {
            return this.props.title;
        }
        else if (0 < this.state.src.length) {
            return this.state.src.split("/").pop();
        }
        else {
            return "Unknown";
        }
    }
    _renderBody() {
        if (0 === this.state.src.length) {
            return React.createElement(CardBody, null,
                React.createElement("audio", null,
                    "Your browser does not support the ",
                    React.createElement("code", null, "audio"),
                    " element."),
                "No sound to play");
        }
        else {
            return React.createElement(CardBody, null,
                React.createElement("audio", { src: this.state.src, title: this._renderTitle(), role: "application", className: "col-12", controls: true, autoPlay: Boolean(this.props.autoplay), loop: Boolean(this.props.loop) },
                    "Your browser does not support the ",
                    React.createElement("code", null, "audio"),
                    " element."));
        }
    }
    render() {
        return React.createElement(Card, { id: this.props.id, className: this.props.className, style: this.props.style },
            React.createElement(CardHeader, null, this._renderTitle()),
            this._renderBody());
    }
}
// name
SoundReader.displayName = "SoundReader";
export default SoundReader;
