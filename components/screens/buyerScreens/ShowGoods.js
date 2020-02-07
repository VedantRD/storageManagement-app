import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Item, Input, Left, Body, Right, Title, View } from 'native-base';
import GoodsCard from './GoodsCard';

const FarmersData = require('./buyerData/AvailableFarmers.json')

export default class ShowGoods extends Component {
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <Header searchBar rounded style={{}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search here" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content padder style={{ flex: 1 }}>
                    <GoodsCard navigation={this.props.navigation}></GoodsCard>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({})
