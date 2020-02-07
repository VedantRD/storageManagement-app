import React, { Component } from 'react'
import { Image, Alert, StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item, View, Footer, FooterTab, item } from 'native-base';
const niceBlue = '#1E8AE9'


export default class PaymentDetails extends Component {
    render() {
        return (
            <Container>
                <Header style={{}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ justifyContent: 'center' }}>
                        <Title style={{ fontSize: 22 }}>Payment Options</Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem header bordered style={{}}>
                            <Icon name='ios-card' style={{ fontSize: 32, marginRight: 5 }}></Icon>
                            <Text style={{ fontSize: 21, color: niceBlue, fontWeight: 'bold' }}>ADD NEW CARD</Text>
                        </CardItem>
                        <CardItem bordered style={{ borderBottomWidth: 2 }}>
                            <Body style={{}}>
                                <Text style={{ fontSize: 17, paddingBottom: 4 }}>Available Now : sqft</Text>
                                <Text style={{ fontSize: 17, paddingVertical: 4 }}>Height : feet</Text>
                                <Text style={{ fontSize: 17, paddingVertical: 4 }}>Address :</Text>
                            </Body>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Thumbnail style={{ height: 35, width: 35, marginRight: 5 }} source={require('../../assets/upi.png')}></Thumbnail>
                            <Text style={{ fontSize: 21, color: niceBlue, fontWeight: 'bold' }}>ADD NEW UPI ID</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{ fontSize: 17, paddingBottom: 4 }}>Flooring : </Text>
                                <Text style={{ fontSize: 17, paddingVertical: 4 }}>Roof Type : </Text>
                                <Text style={{ fontSize: 17, paddingTop: 4 }}>Cold Storage Available :
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({})
