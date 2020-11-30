import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTab from './AppTab';
import UserBankScreen from '../screens/UserBankScreen';
import UserDataScreen from '../screens/UserDataScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true,}} />
            <HomeStack.Screen name="userbank" component={UserBankScreen} options={{headerTitle: 'UserBank', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1fa1c7'} }}/>
            <HomeStack.Screen name="user_data" component={UserDataScreen} options={{headerTitle: 'UserData', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1fa1c7'} }}/>
        </HomeStack.Navigator>
    );
}