import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FarmerLoginScreen from '../../auth/Hindi/FarmerLogin'
// import FarmerRegisterScreen from '../auth/FarmerRegister'
// import ShowWarehouses from '../screens/farmerScreens/ShowWarehouses'
// import WarehouseDetails from '../screens/farmerScreens/WarehouseDetails'
// import FarmerTabNavigator from './FarmerTabNavigator'
// import FarmerProfile from '../screens/farmerScreens/FarmerProfile'
// import BookDetails from '../screens/farmerScreens/BookDetails'
// import TransportOptions from '../screens/farmerScreens/TransportOptions'

const MainNavigator = createStackNavigator({
    FarmerLogin: {
        screen: FarmerLoginScreen,
        navigationOptions: () => ({ headerShown: false })
    },
    // FarmerRegister: {
    //     screen: FarmerRegisterScreen,
    //     navigationOptions: () => ({ headerShown: false })
    // },
    // ShowWarehouses: {
    //     screen: ShowWarehouses,
    //     navigationOptions: () => ({ headerShown: false })
    // },
    // WarehouseDetails: {
    //     screen: WarehouseDetails,
    //     navigationOptions: () => ({ headerShown: false })
    // },
    // FarmerProfile: {
    //     screen: FarmerProfile,
    //     navigationOptions: () => ({ headerShown: false })
    // },
    // BookDetails: {
    //     screen: BookDetails,
    //     navigationOptions: () => ({ headerShown: false })
    // },
    // TransportOptions: {
    //     screen: TransportOptions,
    //     navigationOptions: () => ({ headerShown: false })
    // },
    // FarmerTabNavigator: {
    //     screen: FarmerTabNavigator,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'FarmerSolutions',
    //         headerTitleStyle: {
    //             fontWeight: 'bold',
    //             textAlign: 'center',
    //             flexGrow: 1,
    //             color: 'white'
    //         },
    //         alignItems: 'center',
    //         headerStyle: {
    //             backgroundColor: '#3F51B5',
    //             height: 70
    //         },
    //         headerShown: false
    //     })
    //}
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;