import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FarmerStackNavigator from './Hindi/FarmerStackNavigator'
// import BuyerStackNavigator from '../routes/Hindi/BuyerStackNavigator'
// import WarehouseOwnerStackNavigator from '../routes/Hindi/WarehouseOwnerStackNavigator'
import MainRouterHindi from './MainRouterHindi'

const MainNavigator = createStackNavigator({
    MainRouterHindi: {
        screen: MainRouterHindi,
        navigationOptions: () => ({ headerShown: false })
    },
    FarmerStackNavigator: {
        screen: FarmerStackNavigator,
        navigationOptions: () => ({ headerShown: false })
    },
    // BuyerStackNavigator: {
    //     screen: BuyerStackNavigator,
    //     navigationOptions: () => ({ headerShown: false })
    // },
    // WarehouseOwnerStackNavigator: {
    //     screen: WarehouseOwnerStackNavigator,
    //     navigationOptions: () => ({ headerShown: false })
    // },
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;