import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainStackNavigator from './MainStackNavigator'
import MainStackNavigatorHindi from './MainStackNavigatorHindi'
import SelectLanguage from './SelectLanguage'

const MainNavigator = createStackNavigator({
    SelectLanguage: {
        screen: SelectLanguage,
        navigationOptions: () => ({ headerShown: false })
    },
    English: {
        screen: MainStackNavigator,
        navigationOptions: () => ({ headerShown: false })
    },
    Hindi: {
        screen: MainStackNavigatorHindi,
        navigationOptions: () => ({ headerShown: false })
    },


});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;