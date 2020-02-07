import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from '../screens/wareownerScreens/Dashboard'
import WareDetails from '../screens/wareownerScreens/WareDetails'
import WarehouseLogin from '../auth/WarehouseLogin';
import WarehouseRegister from '../auth/WarehouseRegister'
import WareTabNavigator from './WareTabNavigator'
import FarmerProfile from '../screens/farmerScreens/FarmerProfile'

const MainNavigator = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: () => ({ headerShown: false })
    },
    WareDetails: {
        screen: WareDetails,
        navigationOptions: () => ({ headerShown: false })
    }

});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;