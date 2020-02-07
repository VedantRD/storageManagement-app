import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BuyerLogin from '../auth/BuyerLogin'
import BuyerRegister from '../auth/BuyerRegister'
import ShowGoods from '../screens/buyerScreens/ShowGoods'
import RiceDetails from '../screens/buyerScreens/RiceDetails'
import BuyerTabNavigator from '../routes/BuyerTabNavigator'

const MainNavigator = createStackNavigator({
    BuyerLogin: {
        screen: BuyerLogin,
        navigationOptions: () => ({ headerShown: false })
    },
    BuyerRegister: {
        screen: BuyerRegister,
        navigationOptions: () => ({ headerShown: false })
    },
    ShowGoods: {
        screen: ShowGoods,
        navigationOptions: () => ({ headerShown: false })
    },
    RiceDetails: {
        screen: RiceDetails,
        navigationOptions: () => ({ headerShown: false })
    },
    BuyerTabNavigator: {
        screen: BuyerTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'FarmerSolutions',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                flexGrow: 1,
                color: 'white'
            },
            alignItems: 'center',
            headerStyle: {
                backgroundColor: '#3F51B5',
                height: 70
            },
            headerShown: false
        })
    }

});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;