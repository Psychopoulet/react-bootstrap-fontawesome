"use strict";

// deps

	// externals
    import React, { JSX } from "react";
	import { createRoot } from "react-dom/client";

    // locals
    import {
        Alert,
        Badge,
        Button, ButtonGroup,
        Icon,
        Card, CardBody, CardFooter, CardHeader, CardHeaderNav, CardImage, CardList, CardTable,
        CheckBox, CheckBoxLabel, CheckBoxPrettierLabel,
        InputArray, InputArrayLabel,
        InputColor, InputColorLabel,
        Image,
        InputFloat, InputFloatLabel,
        InputInteger, InputIntegerLabel,
        InputIPV4, InputIPV4Label,
        InputLabel,
        InputReadOnly, InputReadOnlyLabel,
        InputText, InputTextLabel,
        InputFile, InputFileLabel,
        Range, RangeLabel,
        Select, SelectLabel,
        SelectInteger, SelectIntegerLabel,
        TextArea, TextAreaLabel,
        List, ListItem, ListItemHeader,
        MaxHeightContent,
        SoundReader,
        TableBody, TableHeader, TableFooter

    } from "../lib/src/main";

    /*
    import {
        InvalidFeedBack,
        InvalidFeedBackRequired, InvalidFeedBackFloat, InvalidFeedBackInteger,
        InvalidFeedBackMin, InvalidFeedBackMax,
        InvalidFeedBackMinLength, InvalidFeedBackMaxLength
    } from "./fields/FieldFeedBacks";

    import Modal from "./modal/Modal";
    import ModalBody from "./modal/ModalBody";
    import ModalImage from "./modal/ModalImage";
    import ModalList from "./modal/ModalList";
    import ModalTable from "./modal/ModalTable";
    import ModalFooter from "./modal/ModalFooter";

    import NavTabs from "./nav/NavTabs";
    import NavItem from "./nav/NavItem";

    import Table from "./table/Table";
    import TableHeader from "./table/TableHeader";
    import TableBody from "./table/TableBody";
    import TableFooter from "./table/TableFooter";
    */

// types & interfaces

    import type { tVariant } from "../lib/src/types";

    interface iState {
        "index": number;
        "indexCard": number;
        "color": string;
    }

// consts

    const VARIANTS: tVariant[] = [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
        "link"
    ];

    const TABS: string[] = [
        "Alert",
        "Badge",
        "Button",
        "Card",
        "Icon",
        "Image",
        "Input",
        "List",
        "MaxHeightContent",
        "SoundReader",
        "CheckBox",
        "InputArray",
        "InputColor"
    ];

// component

class App extends React.Component<{}, iState> {

	// name

		public static displayName: string = "App";

    // constructor

    public constructor (props: {}) {

        super(props);

        // states

        this.state = {
            "index": 0,
            "indexCard": 0,
            "color": "#ffffff"
        };

    }

	// render

    private _renderNav (): React.JSX.Element | undefined {

        switch (this.state.index) {

            case TABS.findIndex((value: string): boolean => { return "Alert" === value; }):

                return <CardBody>

                    { VARIANTS.map((variant: tVariant, index: number): JSX.Element => {
                        return <Alert key={ index } variant={ variant }>variant { variant }</Alert>;
                    }) }

                    <Alert variant="success" onClose={ () => { alert("close Alert"); } }>Alert success with close button</Alert>

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "Badge" === value; }):

                return <CardBody>

                    { VARIANTS.map((variant: tVariant, index: number): JSX.Element => {
                        return <Badge key={ index } variant={ variant }>variant { variant }</Badge>;
                    }) }

                    <br /><br />

                    <Badge variant="success" pill>success pill</Badge>
                    <Badge variant="warning" icon="barcode" />
                    <Badge variant="info" title="test">info title</Badge>

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "Button" === value; }):

                return <CardBody>

                    <Button disabled>disabled</Button>
                    <Button icon="circle" />
                    <Button icon="circle">icon with content</Button>
                    <Button outline>outline</Button>
                    <Button onClick={ (e: React.MouseEvent<HTMLButtonElement>) => { alert("click Button"); } }>onClick</Button>
                    <Button title="Test">title</Button>

                    <br /><br />

                    <Button type="button">type button</Button>
                    <Button type="reset">type reset</Button>
                    <Button type="submit">type submit</Button>

                    <br /><br />

                    <Button size="sm">size sm</Button>
                    <Button size="md">size md</Button>
                    <Button size="lg">size lg</Button>

                    <br /><br />

                    { VARIANTS.map((variant: tVariant, index: number): JSX.Element => {
                        return <Button key={ index } variant={ variant }>variant { variant }</Button>;
                    }) }

                    <br /><br />

                    <Button block>block</Button>

                    <br /><br />

                    <ButtonGroup>
                        <Button variant="success" icon="play" />
                        <Button variant="danger" icon="stop" />
                    </ButtonGroup>

                    <ButtonGroup block>
                        <Button variant="success" icon="play" />
                        <Button variant="danger" icon="stop" />
                    </ButtonGroup>

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "Card" === value; }):

                return <CardBody>

                    <Card>

                        <CardHeaderNav items={[
                            "variant", "CardHeader/CardFooter", "CardImage", "CardList", "CardTable"
                        ]}

                            selectedIndex={ this.state.indexCard }

                            onSelect={ (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number) => {

                                this.setState({
                                    "indexCard": newIndex
                                });

                            } }

                        />

                        <CardBody>

                            { 0 === this.state.indexCard ? VARIANTS.map((variant: tVariant, index: number): JSX.Element => {

                                return <Card key={ index } variant={ variant }>
                                    <CardBody>variant { variant }</CardBody>
                                </Card>;

                            }) : undefined }

                            { 1 === this.state.indexCard ? VARIANTS.map((variant: tVariant, index: number): JSX.Element => {

                                return <Card key={ index } variant={ variant }>
                                    <CardHeader>CardHeader</CardHeader>
                                    <CardBody>variant { variant }</CardBody>
                                    <CardFooter>CardFooter</CardFooter>
                                </Card>;

                            }) : undefined }

                            { 2 === this.state.indexCard ? <Card>

                                <CardImage src="./test.png" height={ 200 } />

                            </Card> : undefined }

                            { 3 === this.state.indexCard ? <>

                                <Card>

                                    <CardList>

                                        { VARIANTS.map((variant: tVariant, index: number): JSX.Element => {
                                            return <ListItem key={ index } variant={ variant }>variant { variant }</ListItem>;
                                        }) }

                                    </CardList>

                                </Card>

                                <br />

                                <Card>

                                    <CardList>

                                        <ListItem active>active</ListItem>
                                        <ListItem disabled>disabled</ListItem>
                                        <ListItem justify>justify <span>test</span></ListItem>

                                        <ListItem onClick={
                                            (e: React.MouseEvent<HTMLAnchorElement>) => {
                                                alert("click ListItem");
                                            }
                                        }>
                                            onClick
                                        </ListItem>

                                    </CardList>

                                </Card>

                            </> : undefined }

                            { 4 === this.state.indexCard ? <>

                                <Card>

                                    <CardTable>

                                        <TableHeader>
                                            <tr>
                                                <td>TableHeader</td>
                                            </tr>
                                        </TableHeader>

                                        <TableBody>
                                            <tr>
                                                <td>test</td>
                                            </tr>
                                        </TableBody>

                                        <TableFooter>
                                            <tr>
                                                <td>TableFooter</td>
                                            </tr>
                                        </TableFooter>

                                    </CardTable>

                                </Card>

                                <br />

                                <Card>

                                    <CardTable bordered>

                                        <TableBody>
                                            <tr>
                                                <td>bordered</td>
                                                <td>bordered</td>
                                            </tr>
                                            <tr>
                                                <td>bordered</td>
                                                <td>bordered</td>
                                            </tr>
                                        </TableBody>

                                    </CardTable>

                                </Card>

                                <br />

                                <Card>

                                    <CardTable borderless>

                                        <TableBody>
                                            <tr>
                                                <td>borderless</td>
                                                <td>borderless</td>
                                            </tr>
                                            <tr>
                                                <td>borderless</td>
                                                <td>borderless</td>
                                            </tr>
                                        </TableBody>

                                    </CardTable>

                                </Card>

                                <br />

                                <Card>

                                    <CardTable hover>

                                        <TableBody>
                                            <tr>
                                                <td>hover</td>
                                                <td>hover</td>
                                            </tr>
                                            <tr>
                                                <td>hover</td>
                                                <td>hover</td>
                                            </tr>
                                            <tr>
                                                <td>hover</td>
                                                <td>hover</td>
                                            </tr>
                                        </TableBody>

                                    </CardTable>

                                </Card>

                                <br />

                                <Card>

                                    <CardTable responsive>

                                        <TableBody>
                                            <tr>
                                                <td>responsive</td>
                                            </tr>
                                        </TableBody>

                                    </CardTable>

                                </Card>

                                <br />

                                <Card>

                                    <CardTable small>

                                        <TableBody>
                                            <tr>
                                                <td>small</td>
                                                <td>small</td>
                                            </tr>
                                            <tr>
                                                <td>small</td>
                                                <td>small</td>
                                            </tr>
                                        </TableBody>

                                    </CardTable>

                                </Card>

                                <br />

                                <Card>

                                    <CardTable striped>

                                        <TableBody>
                                            <tr>
                                                <td>striped</td>
                                                <td>striped</td>
                                            </tr>
                                            <tr>
                                                <td>striped</td>
                                                <td>striped</td>
                                            </tr>
                                            <tr>
                                                <td>striped</td>
                                                <td>striped</td>
                                            </tr>
                                        </TableBody>

                                    </CardTable>

                                </Card>

                            </> : undefined }

                        </CardBody>

                    </Card>

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "Icon" === value; }):

                return <CardBody>

                    <Icon title="amazon" type="amazon" />
                    <Icon title="android" type="android" />
                    <Icon title="angular" type="angular" />
                    <Icon title="apple" type="apple" />
                    <Icon title="google" type="google" />
                    <Icon title="linux" type="linux" />
                    <Icon title="react" type="react" />
                    <Icon title="windows" type="windows" />

                    <br /><br />

                    <Icon title="barcode" type="barcode" />
                    <Icon title="fingerprint" type="fingerprint" />
                    <Icon title="nfc" type="nfc" />

                    <br /><br />

                    <Icon title="battery-empty" type="battery-empty" />
                    <Icon title="battery-quarter" type="battery-quarter" />
                    <Icon title="battery-half" type="battery-half" />
                    <Icon title="battery-three-quarters" type="battery-three-quarters" />
                    <Icon title="battery-full" type="battery-full" />

                    <br /><br />

                    <Icon title="money-bill" type="money-bill" />
                    <Icon title="credit-card" type="credit-card" />

                    <br /><br />

                    <Icon title="play" type="play" />
                    <Icon title="pause" type="pause" />
                    <Icon title="stop" type="stop" />

                    <br /><br />

                    <Icon title="toggle-on" type="toggle-on" />
                    <Icon title="toggle-off" type="toggle-off" />

                    <br /><br />

                    <Icon title="volume-down" type="volume-down" />
                    <Icon title="volume-up" type="volume-up" />

                    <br /><br />

                    <Icon title="lock" type="lock" />
                    <Icon title="unlock" type="unlock" />

                    <br /><br />

                    <Icon title="asterisk" type="asterisk" />
                    <Icon title="ban" type="ban" />
                    <Icon title="check" type="check" />
                    <Icon title="circle" type="circle" />
                    <Icon title="cog" type="cog" />
                    <Icon title="edit" type="edit" />
                    <Icon title="eye" type="eye" />
                    <Icon title="file-invoice" type="file-invoice" />
                    <Icon title="gamepad" type="gamepad" />
                    <Icon title="headset" type="headset" />
                    <Icon title="hdd" type="hdd" />
                    <Icon title="lightbulb" type="lightbulb" />
                    <Icon title="mask-face" type="mask-face" />
                    <Icon title="microchip" type="microchip" />
                    <Icon title="plug" type="plug" />
                    <Icon title="plus" type="plus" />
                    <Icon title="power" type="power" />
                    <Icon title="print" type="print" />
                    <Icon title="question" type="question" />
                    <Icon title="save" type="save" />
                    <Icon title="sync" type="sync" />
                    <Icon title="times" type="times" />
                    <Icon title="trash" type="trash" />
                    <Icon title="tv" type="tv" />
                    <Icon title="usb" type="usb" />
                    <Icon title="user" type="user" />
                    <Icon title="wifi" type="wifi" />

                    <br /><br />

                    <Icon size="sm" type="circle" />
                    <Icon size="md" type="circle" />
                    <Icon size="lg" type="circle" />
                    <Icon size="xl" type="circle" />

                    <br /><br />

                    { VARIANTS.map((variant: tVariant, index: number): JSX.Element => {
                        return <Icon key={ index } variant={ variant } type="circle" title={ "variant" + variant } />;
                    }) }

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "Image" === value; }):

                return <CardBody>

                    <Image src="./test.png" alt="Alternative text" height={ 100 } width={ 100 } />

                    <br /><br />

                    on click <br />

                    <Image src="./test.png" alt="on click" height={ 100 } width={ 100 }
                        onClick={
                            (e: React.MouseEvent<HTMLImageElement>) => {
                                alert("click Image");
                            }
                        }
                    />

                    <br /><br />

                    border color : { this.state.color } <br />

                    <Image src="./test.png" alt="on mouse enter/leave" height={ 100 } width={ 100 } style={ { "border": "1px solid " + this.state.color } }
                        onMouseEnter={
                            (e: React.MouseEvent<HTMLImageElement>) => {

                                this.setState({
                                    "color": "#000000"
                                });

                            }
                        }
                        onMouseLeave={
                            (e: React.MouseEvent<HTMLImageElement>) => {

                                this.setState({
                                    "color": "#ffffff"
                                });

                            }
                        }
                    />

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "Input" === value; }):

                return <CardBody>

                    <InputLabel for="InputLabel" label="InputLabel" />

                    <InputFloat value={ 0 } />
                    <InputFloatLabel label="InputFloatLabel" value={ 0 } />

                    <InputInteger value={ 0 } />
                    <InputIntegerLabel label="InputIntegerLabel" value={ 0 } />

                    <InputIPV4 />
                    <InputIPV4Label label="InputIPV4Label" />

                    <InputReadOnly />
                    <InputReadOnlyLabel label="InputReadOnlyLabel" />

                    <InputText />
                    <InputTextLabel label="InputTextLabel" />

                    <InputFile />
                    <InputFileLabel label="InputFileLabel" />

                    <Range value={ 0 } />
                    <RangeLabel label="RangeLabel" value={ 0 } />

                    <Select value="option 1" />
                    <SelectLabel label="SelectLabel" value="option 1" />

                    <SelectInteger value={ 0 } />
                    <SelectIntegerLabel label="SelectIntegerLabel" value={ 0 } />

                    <TextArea />
                    <TextAreaLabel label="TextAreaLabel" />

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "List" === value; }):

                return <CardBody>

                    <List>
                        <ListItem>classic</ListItem>
                        <ListItem>classic</ListItem>
                        <ListItem>classic</ListItem>
                    </List>

                    <br />

                    <List horizontal>
                        <ListItem>horizontal</ListItem>
                        <ListItem>horizontal</ListItem>
                        <ListItem>horizontal</ListItem>
                    </List>

                    <br />

                    <List flush>
                        <ListItem>flush</ListItem>
                        <ListItem>flush</ListItem>
                        <ListItem>flush</ListItem>
                    </List>

                    <br />

                    <List>
                        <ListItemHeader>ListItemHeader</ListItemHeader>
                        <ListItem>ListItem</ListItem>
                        <ListItem active>active</ListItem>
                        <ListItem>ListItem</ListItem>
                    </List>

                    <br /><br />

                    { VARIANTS.map((variant: tVariant, index: number): JSX.Element => {

                        return <List key={ index } variant={ variant }>
                            <ListItem>{ variant } 1</ListItem>
                            <ListItem>{ variant } 2</ListItem>
                        </List>;

                    }) }

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "MaxHeightContent" === value; }):

                return <CardBody>

                    strict height <br />

                    <Card>

                        <MaxHeightContent heightPX={ 25 }>

                            <CardBody>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur dolores ipsa eaque quaerat pariatur impedit voluptatem, necessitatibus consequatur? Totam perspiciatis unde voluptatem, laborum vero dolores aut aliquid numquam excepturi?

                            </CardBody>

                        </MaxHeightContent>

                    </Card>

                    max height <br />

                    <Card>

                        <MaxHeightContent maxHeightPX={ 100 }>

                            <CardBody>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur dolores ipsa eaque quaerat pariatur impedit voluptatem, necessitatibus consequatur? Totam perspiciatis unde voluptatem, laborum vero dolores aut aliquid numquam excepturi?

                            </CardBody>

                        </MaxHeightContent>

                    </Card>

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "SoundReader" === value; }):

                return <CardBody>

                    <SoundReader src="./test.mp3" autoplay title="autoplay" />

                    <br />

                    <SoundReader src="./test.mp3" loop title="loop" />

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "CheckBox" === value; }):

                return <CardBody>

                    <CheckBox checked={ true } onToogle={ (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => { alert("toogle CheckBox to " + String(value)); } } />
                    <CheckBoxLabel label="CheckBoxLabel" checked={ true } onToogle={ (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => { alert("toogle CheckBoxLabel to " + String(value)); } } margin-bottom={ 0 } />
                    <CheckBoxPrettierLabel label="CheckBoxPrettierLabel" checked={ true } onToogle={ (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => { alert("toogle CheckBoxPrettierLabel to " + String(value)); } } />

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "InputArray" === value; }):

                return <CardBody>

                    <InputArray value={ [ "line 1", "line 2" ] } onChange={ (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>, value: string[]) => { alert("change InputArray to " + JSON.stringify(value)); } } />
                    <InputArrayLabel label="InputArrayLabel" value={ [ "line 1", "line 2" ] } onChange={ (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>, value: string[]) => { alert("change InputArrayLabel to " + JSON.stringify(value)); } } />

                </CardBody>;

            case TABS.findIndex((value: string): boolean => { return "InputColor" === value; }):

                return <CardBody>

                    <InputColor value="test" onChange={ (e: React.ChangeEvent<HTMLInputElement>, value: string) => { alert("change InputColor to " + value); } } />
                    <InputColorLabel label="InputColorLabel" value="test" onChange={ (e: React.ChangeEvent<HTMLInputElement>, value: string) => { alert("change InputColorLabel to " + value); } } />

                </CardBody>;

        }

        return undefined;

    }

	public render (): React.JSX.Element {

		return <Card>

            <CardHeaderNav items={ TABS }

                selectedIndex={ this.state.index }

                onSelect={ (e: React.MouseEvent<HTMLAnchorElement>, newIndex: number) => {

                    this.setState({
                        "index": newIndex
                    });

                } }

            />

            { this._renderNav() }

        </Card>;

	}

};

createRoot(document.getElementById("TestApp") as HTMLElement).render(<App />);
