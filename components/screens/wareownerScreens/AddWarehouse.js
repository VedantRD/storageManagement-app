import React, { Component } from 'react';
import Slider from "react-native-slider";
import { Container, Header, Content, Item, Input, Picker, Text, Icon, Form, Textarea, View, Button, Label } from 'native-base';
import { Dimensions } from 'react-native';
export default class IconTextboxExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0",
            value: 0.2
        };
    }

    // componentDidUpdate() {
    //     onValueChange = (value: string) => {
    //         this.setState({
    //             selected: value
    //         });
    //     }
    // }

    render() {
        return (
            <Container>
                <Header style={{ height: 70 }}>
                    <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                        {/* <Icon active name='ios-expand' style={{ marginRight: 15, color: 'white' }} /> */}
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 21 }} >Post Space Available</Text>
                    </View>
                </Header>
                <Content padder>
                    <Form style={{ paddingHorizontal: 7, marginTop: 20 }}>
                        <Label style={{ fontWeight: 'bold', marginBottom: 5 }}>Select Warehouse:</Label>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            style={{ width: undefined }}
                            selectedValue={this.state.selected}
                        // onValueChange={this.onValueChange}
                        >
                            <Picker.Item label="Warehouse - 1" value="key0" />
                            <Picker.Item label="Warehouse - 2" value="key1" />
                            <Picker.Item label="Warehouse - 3" value="key2" />
                        </Picker>


                        <Label style={{ fontWeight: 'bold', marginBottom: 7 }}>Space:</Label>
                        <Slider
                            value={this.state.value}
                        // onValueChange={value => this.setState({ value })}
                        />
                        <Text style={{ textAlign: 'right' }}>{parseInt(this.state.value * 100.00)} sq.ft</Text>

                        <Label style={{ fontWeight: 'bold', marginBottom: 5 }}>Details :</Label>
                        <Textarea rowSpan={5} bordered style={{ padding: 7 }} />
                        <Button style={{ marginTop: 30, justifyContent: 'center' }}>
                            <Text>Post</Text>
                        </Button>
                    </Form>
                    {/* <Item>
                        <Input placeholder='Icon Alignment in Textbox' />
                        <Icon active name='swap' />
                    </Item> */}
                </Content>
            </Container>
        );
    }
}