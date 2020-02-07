import React, { Component } from 'react'
import { Image, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, View } from 'native-base';
import StarRating from 'react-native-star-rating'
import { StyleSheet } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export class WarehouseCard extends Component {
    render() {
        const item = this.props.data
        // const nav =   
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("WarehouseDetails", { item: item })}>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require(`../../assets/warehouses/ware2.jpg`)} />
                            <Body style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ fontSize: 16 }} note>{item.address}</Text>
                            </Body>
                            <Text style={{ fontWeight: 'bold', marginRight: 10, fontSize: 18 }}>{item.distance} Km</Text>
                        </Left>
                    </CardItem>
                    <CardItem style={{ flexDirection: 'row' }}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent>
                                <StarRating disabled={false} maxStars={5} starSize={18}
                                    fullStarColor={'orange'}
                                    rating={item.rating}
                                />
                            </Button>
                        </Left>
                        <Right style={{ flex: 1 }}>
                            <Text>
                                <Text style={{}}>Available : </Text>
                                <Text style={{ fontWeight: 'bold', color: 'green' }}>{item.availableSpace} Sq Ft</Text>
                            </Text>
                            <Text style={{}}>Total Area : {item.space} Sq Ft</Text>
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default WarehouseCard
