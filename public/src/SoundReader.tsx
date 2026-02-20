// deps

    // externals
    import React from "react";

    // internals
    import Card from "./card/Card";
    import CardHeader from "./card/CardHeader";
    import CardBody from "./card/CardBody";

// types & interfaces

    // internals
    import type { iPropsNode } from "./types";

// Props && States

    interface iStates {
        "src": string;
    }

    interface iProps extends iPropsNode {
        "src": string;
        "title"?: string;
        "autoplay"?: boolean;
        "loop"?: boolean;
    }

// component

export default class SoundReader extends React.Component<iProps, iStates> {

    // name

        public static displayName: string = "SoundReader";

    // constructor

    public constructor (props: iProps) {

        super(props);

        // states

        const newSrc: string = props.src.trim();

        this.state = {
            "src": newSrc
        };

    }

    public static getDerivedStateFromProps (props: iProps, state: iStates): iStates | null {

        // props.src = new src
        // state.src = old src

        if (props.src !== state.src) { // src changed

            const newSrc: string = props.src.trim();

            return {
                "src": newSrc
            };

        }

        return null;

    }

    // render

    private _renderTitle (): string {

        if (this.props.title && 0 < this.props.title.length) {
            return this.props.title;
        }
        else if (0 < this.state.src.length) {
            return this.state.src.split("/").pop() as string;
        }
        else {
            return "Unknown";
        }

    }

    private _renderBody (): React.JSX.Element {

        if (0 === this.state.src.length) {

            return <CardBody>

                <audio>
                    Your browser does not support the <code>audio</code> element.
                </audio>

                No sound to play

            </CardBody>;

        }
        else {

            return <CardBody>

                <audio src={ this.state.src } title={ this._renderTitle() }
                    role="application"
                    className="col-12"
                    controls={ true }
                    autoPlay={ Boolean(this.props.autoplay) }
                    loop={ Boolean(this.props.loop) }
                >
                    Your browser does not support the <code>audio</code> element.
                </audio>

            </CardBody>;

        }

    }

    public render (): React.JSX.Element {

        return <Card id={ this.props.id } className={ this.props.className } style={ this.props.style }>

            <CardHeader>
                { this._renderTitle() }
            </CardHeader>

            { this._renderBody() }

        </Card>;

    }

}
