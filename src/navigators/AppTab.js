import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';      /** Import para a TabBar Customizada */
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import PayScreen from '../screens/PayScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ConfigScreen from '../screens/ConfigScreen';


const AppTab = createBottomTabNavigator();

export default () => {
    return (
        <AppTab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        tabBarOption={{
            keyboardHidesTabBar: true
        }}
        >
            <AppTab.Screen name="home" component={HomeScreen} />
            <AppTab.Screen name="wallet" component={WalletScreen} />
            <AppTab.Screen name="pay" component={PayScreen} />
            <AppTab.Screen name="notification" component={NotificationScreen} />
            <AppTab.Screen name="config" component={ConfigScreen} />
        </AppTab.Navigator>
    );
}