import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Item, Input, Left, Body, Right, Title, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class GoodsCard extends Component {
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RiceDetails')}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/rice.jpg')} />
                                <Body>
                                    <Text style={{ fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Rice</Text>
                                    <Text note style={{ marginLeft: 3 }}>Basmati Rice</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon style={{ fontSize: 25 }} name='heart-empty' />
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>
                                    <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>10000.25 Rs./q</Text>
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Taste the goodness of rice cultiavted without any chemical fertilizer
                            </Text>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RiceDetails')}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/onion.jpg')} />
                                <Body>
                                    <Text style={{ fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Onion</Text>
                                    <Text note style={{ marginLeft: 3 }}>Red Onion</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon style={{ fontSize: 25 }} name='heart-empty' />
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>
                                    <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>1000.25 Rs./q</Text>
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text>
                                All fresh and Only Organic Vegetables.
                                Best in the Market
                            </Text>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RiceDetails')}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/rice.jpg')} />
                                <Body>
                                    <Text style={{ fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Rice</Text>
                                    <Text note style={{ marginLeft: 3 }}>Kolam</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon style={{ fontSize: 25 }} name='heart-empty' />
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>
                                    <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>10000.25 Rs./q</Text>
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Taste the goodness of rice cultiavted without any chemical fertilizer
                            </Text>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RiceDetails')}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/onion.jpg')} />
                                <Body>
                                    <Text style={{ fontSize: 20, marginLeft: 3, fontWeight: 'bold' }}>Onion</Text>
                                    <Text note style={{ marginLeft: 3 }}>White Onion</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon style={{ fontSize: 25 }} name='heart-empty' />
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text>
                                    <Text style={{ color: '#069e31', fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>1000.25 Rs./q</Text>
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text>
                                All fresh and Only Organic Vegetables.
                                Best in the Market
                            </Text>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default GoodsCard
