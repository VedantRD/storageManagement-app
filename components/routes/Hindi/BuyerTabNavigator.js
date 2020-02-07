import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import ShowGoods from '../screens/buyerScreens/ShowGoods'
import BuyerProfile from '../screens/buyerScreens/BuyerProfile'
import BuyerOrders from '../screens/buyerScreens/BuyerOrders'
import screen from 'react-native'
const danger = '#D9534f'
BTabNavigator = createBottomTabNavigator(
    {
        Home: ShowGoods,
        BuyerOrders: BuyerOrders,
        BuyerProfile: BuyerProfile,
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer >
                    <FooterTab style={{ position: 'absolute', bottom: 0, top: 0, width: '100%', height: screen.height, minHeight: screen.height }}  >
                        <Button
                            vertical
                            active={props.navigation.state.index === 0}
                            onPress={() => props.navigation.navigate("Home")}>
                            <Icon name="ios-home" />
                            <Text>Home</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate("BuyerOrders")}>
                            <Icon name="ios-nutrition" />
                            <Text>My Orders</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 2}
                            onPress={() => props.navigation.navigate("BuyerProfile")}>
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);

export default createAppContainer(BTabNavigator)