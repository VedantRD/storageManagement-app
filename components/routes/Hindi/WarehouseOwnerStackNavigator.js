// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import WarehouseLogin from '../auth/WarehouseLogin';
// import WarehouseRegister from '../auth/WarehouseRegister'
// import WareTabNavigator from './WareTabNavigator'
// import FarmerProfile from '../screens/farmerScreens/FarmerProfile'

// const MainNavigator = createStackNavigator({
//     WareownerLogin: {
//         screen: WarehouseLogin,
//         navigationOptions: () => ({ headerShown: false })
//     },
//     WareownerRegister: {
//         screen: WarehouseRegister,
//         navigationOptions: () => ({ headerShown: false })
//     },
//     WareownerProfile: {
//         screen: FarmerProfile,
//         navigationOptions: () => ({ headerShown: false })
//     },
//     WareTabNavigator: {
//         screen: WareTabNavigator,
//         navigationOptions: ({ navigation }) => ({
//             title: 'FarmerSolutions',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//                 flexGrow: 1,
//                 color: 'white'
//             },
//             alignItems: 'center',
//             headerStyle: {
//                 backgroundColor: '#3F51B5',
//                 height: 70
//             },
//             headerShown: false
//         })
//     }
// });

// const Navigator = createAppContainer(MainNavigator);

// export default Navigator;