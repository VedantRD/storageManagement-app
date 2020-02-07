import React, { Component } from 'react'
import { Image, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item, View, Footer, FooterTab } from 'native-base';
import StarRating from 'react-native-star-rating'

const niceBlue = '#2c69db'
export class RiceDetails extends Component {
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
                        <Title style={{ fontSize: 22 }}></Title>
                    </Body>
                    {/* <Right></Right> */}
                </Header>

                {/* ====================== Info ========================== */}

                <Content>
                    <Card>
                        <CardItem header bordered style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 28, color: niceBlue, fontWeight: 'bold', textAlign: 'center' }}>Rice</Text>
                        </CardItem>

                        <CardItem bordered style={{ justifyContent: 'flex-end' }}>
                            <Body style={{}}>
                                <Text style={{ fontSize: 18, paddingBottom: 4 }}>Quantity Available : 10 q</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Minimum Quantity : 2 q</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Stored At : Jayesh's Warehouse </Text>

                            </Body>

                        </CardItem>
                        <CardItem header bordered style={{ justifyContent: 'flex-end', borderBottomWidth: 2, }}>
                            <Left>
                                <Text>
                                    <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 22, marginRight: 10 }}>50.25 Rs./q</Text>
                                </Text>
                            </Left>
                            <Right>
                                <Button block onPress={() => Alert.alert('Under Development', 'this feature is coming soon, Please stay tuned')} style={{ backgroundColor: '#2c69db' }}>
                                    <Text style={{ fontSize: 17, fontWeight: '900' }}>Buy</Text>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Description</Text>
                        </CardItem>
                        <CardItem bordered style={{ borderBottomWidth: 2 }}>
                            <Body style={{}}>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Top Quality Rice. It is Best Seller in the Market.</Text>
                            </Body>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Product Details</Text>
                        </CardItem>
                        <CardItem bordered style={{ borderBottomWidth: 2 }}>
                            <Body style={{}}>
                                <Text style={{ fontSize: 18, paddingBottom: 4 }}>Type : Kolam</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Cropped in : Rabi</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Moisture : 2.7</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Product Cultivated at : Raichur</Text>
                            </Body>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Farmer Details</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{ fontSize: 18, paddingBottom: 4 }}>Name:Ajay bhidu</Text>
                                <Text style={{ fontSize: 18, paddingVertical: 4 }}>Number:</Text>
                                <Text style={{ fontSize: 18, paddingTop: 4 }}>Address: </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default RiceDetails
