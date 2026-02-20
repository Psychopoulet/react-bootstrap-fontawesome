// deps

    // externals
    import * as React from "react";

    // locals
    import Image, { type iPropsImage } from "../Image";

// Props && States

    interface iPropsCardImage extends iPropsImage {
        "position"?: "top" | "bottom";
    }

// component

export default class CardImage extends React.PureComponent<iPropsCardImage> {

    // name

    public static displayName: string = "CardImage";

    // render

    public render (): React.JSX.Element {

        let className: string = this.props.position ? "card-img-" + this.props.position : "card-img-top";
        className += this.props.className ? " " + this.props.className : "";

        return <Image id={ this.props.id } src={ this.props.src } alt={ this.props.alt }
            className={ className } style={ this.props.style } height={ this.props.height } width={ this.props.width }
            onClick={ this.props.onClick } onMouseEnter={ this.props.onMouseEnter } onMouseLeave={ this.props.onMouseLeave }
        />;

    }

}
