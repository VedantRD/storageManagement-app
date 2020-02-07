import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import ShowWarehouses from '../screens/farmerScreens/ShowWarehouses'
import AllGoods from '../screens/farmerScreens/AllGoods'
import FarmerProfile from '../screens/farmerScreens/FarmerProfile'
import screen from 'react-native'
const danger = '#D9534f'
BTabNavigator = createBottomTabNavigator(
    {
        ShowWarehouses: ShowWarehouses,
        AllGoods: AllGoods,
        FarmerProfile: FarmerProfile
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer >
                    <FooterTab style={{ position: 'absolute', bottom: 0, top: 0, width: '100%', height: screen.height, minHeight: screen.height}}  >
                        <Button
                            vertical
                            active={props.navigation.state.index === 0}
                            onPress={() => props.navigation.navigate("ShowWarehouses")}>
                            <Icon name="ios-home" />
                            <Text>Home</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate("AllGoods")}>
                            <Icon name="ios-nutrition" />
                            <Text>My Goods</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 2}
                            onPress={() => props.navigation.navigate("FarmerProfile")}>
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                        {/* <Button
                            vertical
                            active={props.navigation.state.index === 3}
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button> */}
                    </FooterTab>
                </Footer>
            );
        }
    }
);

export default createAppContainer(BTabNavigator)