"use strict";

// deps

	// externals
    import React from "react";
	import { createRoot } from "react-dom/client";

    // locals
    import {
        Alert,
        Badge,
        Button, ButtonGroup,
        Icon,
        Card, CardHeaderNav, CardBody,
        CheckBox, CheckBoxLabel, CheckBoxPrettierLabel,
        InputArray, InputArrayLabel,
        InputColor, InputColorLabel
    } from "../lib/src/main";

// types & interfaces

    interface iState {
        "index": number;
    }

// component

class App extends React.Component<{}, iState> {

	// name

		public static displayName: string = "App";

    // constructor

    public constructor (props: {}) {

        super(props);

        // states

        this.state = {
            "index": 0
        };

    }

	// render

    private _renderNav (): React.JSX.Element | undefined {

        switch (this.state.index) {

            case 0:

                return <CardBody>

                    <Alert variant="primary">Alert primary</Alert>
                    <Alert variant="secondary">Alert secondary</Alert>
                    <Alert variant="success">Alert success</Alert>
                    <Alert variant="warning">Alert warning</Alert>
                    <Alert variant="danger">Alert danger</Alert>
                    <Alert variant="info">Alert info</Alert>
                    <Alert variant="light">Alert light</Alert>
                    <Alert variant="dark">Alert dark</Alert>
                    <Alert variant="link">Alert link</Alert>

                    <Alert variant="success" onClose={ () => { alert("close Alert"); } }>Alert success with close button</Alert>

                </CardBody>;

            case 1:

                return <CardBody>

                    <Badge variant="primary">variant primary</Badge>
                    <Badge variant="secondary">variant secondary</Badge>
                    <Badge variant="success">variant success</Badge>
                    <Badge variant="warning">variant warning</Badge>
                    <Badge variant="danger">variant danger</Badge>
                    <Badge variant="info">variant info</Badge>
                    <Badge variant="light">variant light</Badge>
                    <Badge variant="dark">variant dark</Badge>
                    <Badge variant="link">variant link</Badge>

                    <br /><br />

                    <Badge variant="success" pill>success pill</Badge>
                    <Badge variant="warning" icon="barcode" />
                    <Badge variant="info" title="test">info title</Badge>

                </CardBody>;

            case 2:

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

                    <Button variant="primary">variant primary</Button>
                    <Button variant="secondary">variant secondary</Button>
                    <Button variant="success">variant success</Button>
                    <Button variant="warning">variant warning</Button>
                    <Button variant="danger">variant danger</Button>
                    <Button variant="info">variant info</Button>
                    <Button variant="light">variant light</Button>
                    <Button variant="dark">variant dark</Button>
                    <Button variant="link">variant link</Button>

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

            case 3:

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

                    <Icon variant="primary" type="circle" />
                    <Icon variant="secondary" type="circle" />
                    <Icon variant="success" type="circle" />
                    <Icon variant="warning" type="circle" />
                    <Icon variant="danger" type="circle" />
                    <Icon variant="info" type="circle" />
                    <Icon variant="light" type="circle" />
                    <Icon variant="dark" type="circle" />
                    <Icon variant="link" type="circle" />

                </CardBody>;

            // case 4: Image
            // case 5: MaxHeightContent
            // case 6: SoundReader

            case 7:

                return <CardBody>

                    <CheckBox checked={ true } onToogle={ (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => { alert("toogle CheckBox to " + String(value)); } } />
                    <CheckBoxLabel label="CheckBoxLabel" checked={ true } onToogle={ (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => { alert("toogle CheckBoxLabel to " + String(value)); } } margin-bottom={ 0 } />
                    <CheckBoxPrettierLabel label="CheckBoxPrettierLabel" checked={ true } onToogle={ (e: React.ChangeEvent<HTMLInputElement>, value: boolean) => { alert("toogle CheckBoxPrettierLabel to " + String(value)); } } />

                </CardBody>;

            case 8:

                return <CardBody>

                    <InputArray value={ [ "line 1", "line 2" ] } onChange={ (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>, value: string[]) => { alert("change InputArray to " + JSON.stringify(value)); } } />
                    <InputArrayLabel label="InputArrayLabel" value={ [ "line 1", "line 2" ] } onChange={ (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>, value: string[]) => { alert("change InputArrayLabel to " + JSON.stringify(value)); } } />

                </CardBody>;

            case 9:

                return <CardBody>

                    <InputColor value="test" onChange={ (e: React.ChangeEvent<HTMLInputElement>, value: string) => { alert("change InputColor to " + value); } } />
                    <InputColorLabel label="InputColorLabel" value="test" onChange={ (e: React.ChangeEvent<HTMLInputElement>, value: string) => { alert("change InputColorLabel to " + value); } } />

                </CardBody>;

        }

        return undefined;

    }

	public render (): React.JSX.Element {

		return <Card>

            <CardHeaderNav items={[
                "Alert", "Badge", "Button", "Icon", "Image", "MaxHeightContent", "SoundReader",
                "CheckBox", "InputArray", "InputColor"
            ]}

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

    /*
    import Image from "./Image";
    import MaxHeightContent from "./MaxHeightContent";
    import SoundReader from "./SoundReader";

    import CardHeader from "./card/CardHeader";
    import CardBody from "./card/CardBody";
    import CardImage from "./card/CardImage";
    import CardList from "./card/CardList";
    import CardTable from "./card/CardTable";
    import CardFooter from "./card/CardFooter";

    import List from "./list/List";
    import ListItem from "./list/ListItem";
    import ListItemHeader from "./list/ListItemHeader";

    import {
        InvalidFeedBack,
        InvalidFeedBackRequired, InvalidFeedBackFloat, InvalidFeedBackInteger,
        InvalidFeedBackMin, InvalidFeedBackMax,
        InvalidFeedBackMinLength, InvalidFeedBackMaxLength
    } from "./fields/FieldFeedBacks";

    import { InputFloat, InputFloatLabel } from "./fields/InputFloat";
    import { InputInteger, InputIntegerLabel } from "./fields/InputInteger";
    import { InputIPV4, InputIPV4Label } from "./fields/InputIPV4";
    import InputLabel from "./fields/InputLabel";
    import { InputReadOnly, InputReadOnlyLabel } from "./fields/InputReadOnly";
    import { InputText, InputTextLabel } from "./fields/InputText";
    import { InputFile, InputFileLabel } from "./fields/InputFile";
    import { Range, RangeLabel } from "./fields/Range";
    import { Select, SelectLabel } from "./fields/Select";
    import { SelectInteger, SelectIntegerLabel } from "./fields/SelectInteger";
    import { TextArea, TextAreaLabel } from "./fields/TextArea";

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
