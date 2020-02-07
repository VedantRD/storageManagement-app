import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FarmerStackNavigator from '../routes/FarmerStackNavigator'
import BuyerStackNavigator from '../routes/BuyerStackNavigator'
import WarehouseOwnerStackNavigator from '../routes/WarehouseOwnerStackNavigator'
import MainRouter from '../routes/MainRouter'

const MainNavigator = createStackNavigator({
    MainRouter: {
        screen: MainRouter,
        navigationOptions: () => ({ headerShown: false })
    },
    FarmerStackNavigator: {
        screen: FarmerStackNavigator,
        navigationOptions: () => ({ headerShown: false })
    },
    BuyerStackNavigator: {
        screen: BuyerStackNavigator,
        navigationOptions: () => ({ headerShown: false })
    },
    WarehouseOwnerStackNavigator: {
        screen: WarehouseOwnerStackNavigator,
        navigationOptions: () => ({ headerShown: false })
    },
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;