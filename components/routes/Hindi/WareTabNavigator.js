import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import AddWarehouse from '../screens/wareownerScreens/AddWarehouse'
import WareDetails from '../screens/wareownerScreens/WareDetails';
import FarmerProfile from '../screens/farmerScreens/FarmerProfile';
import screen from 'react-native';
const danger = '#D9534f'

BTabNavigator = createBottomTabNavigator(
    {
        WareDetails: WareDetails,
        AddWarehouses: AddWarehouse,
        FarmerProfile: FarmerProfile
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
                            onPress={() => props.navigation.navigate("WareDetails")}>
                            <Icon name="ios-home" />
                            <Text>My Warehouse</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate("AddWarehouses")}>
                            <Icon name="ios-expand" />
                            <Text>Post Space</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 2}
                            onPress={() => props.navigation.navigate("FarmerProfile")}>
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