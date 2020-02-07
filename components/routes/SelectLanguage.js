import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container, Form, Item, Label, Input, Text, View } from 'native-base';
// import MainStackNavigator from './MainStackNavigator'
// import MainStackNavigatorHindi from './MainStackNavigatorHindi'

export default class SelectLanguage extends Component {

    state = {
        role: ""
    }

    render() {
        return (
            <>
                <Container style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    paddingVertical: 200
                }}>
                    <Button rounded danger onPress={() => this.props.navigation.navigate('English')} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                        <Text style={{ fontSize: 19 }}>English</Text>
                    </Button>
                    <Button rounded danger onPress={() => this.props.navigation.navigate('Hindi')} style={{ margin: 25, justifyContent: 'center', marginHorizontal: 60 }}>
                        <Text style={{ fontSize: 19 }}>हिन्दी</Text>
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
