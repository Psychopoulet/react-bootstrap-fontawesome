// deps

    // externals
    import * as React from "react";

    // locals
    import { CardContext } from "./CardContext";
    import List, { type iPropsList } from "../list/List";

// types & interfaces

    // locals
    import type { tVariant } from "../types";

// component

export default class CardList extends React.PureComponent<iPropsList> {

    // name

    public static displayName: string = "CardList";

    // render

    public render (): React.JSX.Element {

        return <CardContext.Consumer>

            {

                (variant: tVariant): React.JSX.Element => {

                    return <List id={ this.props.id } variant={ this.props.variant || variant } className={ "m-0" + (this.props.className ? " " + this.props.className : "") } style={ this.props.style }
                        flush={ true }
                    >
                        { this.props.children }
                    </List>;

                }

            }


        </CardContext.Consumer>;

    }

}
