import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, View } from 'native-base';
import GoodStatsCard from './GoodStatsCard.js';

const FarmersData = (require('./farmerData/StoredGoods.json'))


export default class AllGoods extends Component {

    // state = {
    //     user: 'Ajay'
    // }

    // ind = FarmersData.map()

    render() {
        const user = "Ajay"
        const ind = FarmersData.findIndex(i => i.name == user)
        const danger = '#D9534f'
        return (
            <Container>
                <Header style={{}}>
                    <Body style={{ alignItems: 'center' }}>
                        <Title style={{ fontSize: 22, fontWeight: 'bold' }}>My Goods</Title>
                    </Body>
                </Header>
                <Content padder>
                    {FarmersData[ind].goods.map((item, index) => <GoodStatsCard item={item} key={index}></GoodStatsCard>)}
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({})
