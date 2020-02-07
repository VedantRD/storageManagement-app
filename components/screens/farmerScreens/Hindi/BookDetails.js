import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Text, Right, Left, View, Label, Textarea, Button, CardItem, Card, DatePicker, Title, Icon, Body } from 'native-base';
export default class FormExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' style={{ color: 'white', marginLeft: 10 }}>
                            </Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title header style={{ fontSize: 22, textAlignVertical: 'center', fontWeight: 'bold' }}>Enter Details</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card transparent >
                        <CardItem style={{ justifyContent: 'flex-end' }}>
                            <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 22 }}>
                                Rate : 25 Rs/q
                    </Text>
                        </CardItem>
                    </Card>
                    <Form style={{ paddingHorizontal: 7, marginTop: 30 }}>
                        <Label style={{ marginBottom: 7 }}>Required Size :</Label>
                        <View regular style={{ padding: 5, marginBottom: 10, flexDirection: 'row' }}>
                            <Input placeholder='appox value' style={{ flex: 3, borderWidth: 1, borderColor: '#e0dedc' }} />
                            <Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center', fontSize: 18 }}>Sq. Ft</Text>
                        </View>
                        <Label style={{ marginBottom: 7 }}>Store From</Label>
                        <Item style={{ marginBottom: 20, borderBottomWidth: 0 }}>
                            <View style={{ borderWidth: 1, width: "103%", borderColor: '#e0dedc', marginLeft: -13 }}>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2019, 4, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#5a6575" }}
                                    onDateChange={this.setDate}
                                    disabled={false}
                                />
                            </View>
                        </Item>
                        <Label style={{ marginBottom: 7 }}>Phone No. :</Label>
                        <Item regular style={{ padding: 0, marginBottom: 10 }}>
                            <Input placeholder='+91' />
                        </Item>
                        <Button style={{ justifyContent: 'center', marginTop: 30 }} onPress={() => this.props.navigation.navigate('TransportOptions')}>
                            <Text style={{ fontSize: 18 }}>Next</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}