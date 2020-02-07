import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Content } from 'native-base'

export default class BuyerOrders extends Component {
    render() {
        return (
            <Content padder>
                <Text style={{ textAlign: 'center', fontSize: 19, marginTop: 22 }}> No Orders Right Now </Text>
            </Content>
        )
    }
}

const styles = StyleSheet.create({})
