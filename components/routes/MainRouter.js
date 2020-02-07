import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container, Form, Item, Label, Input, Text, View } from 'native-base';
import FarmerNavigator from './FarmerStackNavigator'
import BuyerNavigator from './BuyerStackNavigator'
import WarehouseOwnerNavigator from './WarehouseOwnerStackNavigator'

export default class MainRouter extends Component {

    state = {
        role: ""
    }

    render() {
        return (
            // this.state.role === "" ?
            <>
                <Container style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    paddingVertical: 200
                    // marginVertical: 200,
                }}>
                    <Button rounded danger onPress={() => this.props.navigation.navigate('FarmerStackNavigator')} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                        <Text style={{ fontSize: 19 }}>Farmer</Text>
                    </Button>
                    <Button rounded danger onPress={() => this.props.navigation.navigate('BuyerStackNavigator')} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                        <Text style={{ fontSize: 19 }}>Buyer</Text>
                    </Button>
                    <Button danger rounded onPress={() => this.props.navigation.navigate('WarehouseOwnerStackNavigator')} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                        <Text style={{ fontSize: 19 }}>Warehouse Owner</Text>
                    </Button>
                </Container>
            </>

        )
    }
}

{/*  :
                this.state.role === "farmer" ?
                    <FarmerNavigator></FarmerNavigator> :
                    this.state.role === "buyer" ?
                        <BuyerNavigator></BuyerNavigator> :
                        <WarehouseOwnerNavigator></WarehouseOwnerNavigator> */}
const styles = StyleSheet.create({})
