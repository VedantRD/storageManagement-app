import React, { Component } from 'react'
import { Image, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, InputGroup, Input, Form, Item, View, Footer, FooterTab } from 'native-base';
import StarRating from 'react-native-star-rating'

const niceBlue = '#2c69db'
export class WarehouseDetails extends Component {
    render() {
        const item = this.props.navigation.getParam('item')
        return (
            <Container>
                <Header style={{}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ justifyContent: 'center' }}>
                        <Title style={{ fontSize: 22 }}>{item.name}</Title>
                    </Body>
                    {/* <Right></Right> */}
                </Header>

                {/* ====================== Info ========================== */}

                <Content>
                    <Card>
                        <Image source={require('../../assets/warehouses/ware2.jpg')} style={{ height: 250, width: '100%' }} />
                        <CardItem bordered style={{ justifyContent: 'flex-end' }}>
                            <Left>
                                <Button transparent>
                                    <StarRating disabled={true} maxStars={5} starSize={25}
                                        fullStarColor={'#FAB20A'}
                                        rating={item.rating}
                                    />
                                </Button>
                            </Left>
                            <Right>
                                <Button block onPress={() => this.props.navigation.navigate('BookDetails')} style={{ backgroundColor: '#2c69db' }}>
                                    <Text style={{ fontSize: 17, fontWeight: '900' }}>Book</Text>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem header bordered style={{ justifyContent: 'flex-end', borderBottomWidth: 2, }}>
                            <Text>
                                <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 19, marginRight: 10 }}>{item.rent} Rs/Quintal</Text>
                            </Text>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Text style={{ fontSize: 21, color: niceBlue, fontWeight: 'bold' }}>Details</Text>
                        </CardItem>
                        <CardItem bordered style={{ borderBottomWidth: 2 }}>
                            <Body style={{}}>
                                <Text style={{ fontSize: 17, paddingBottom: 4 }}>Available Now : {item.availableSpace} sqft</Text>
                                <Text style={{ fontSize: 17, paddingVertical: 4 }}>Height : {item.height} feet</Text>
                                <Text style={{ fontSize: 17, paddingVertical: 4 }}>Address : {item.address}</Text>
                            </Body>
                        </CardItem>
                        <CardItem header bordered style={{}}>
                            <Text style={{ fontSize: 21, color: niceBlue, fontWeight: 'bold' }}>Construction Details</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{ fontSize: 17, paddingBottom: 4 }}>Flooring : {item.flooring}</Text>
                                <Text style={{ fontSize: 17, paddingVertical: 4 }}>Roof Type : {item.roofType}</Text>
                                <Text style={{ fontSize: 17, paddingTop: 4 }}>Cold Storage Available : {item.coldStorage ? <Text style={{ fontSize: 17 }}>Yes</Text> : <Text style={{ fontSize: 18 }}>No</Text>}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container >
        )
    }
}

export default WarehouseDetails
