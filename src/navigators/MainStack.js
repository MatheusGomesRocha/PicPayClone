import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTab from './AppTab';
import UserBankScreen from '../screens/UserBankScreen';
import UserDataScreen from '../screens/UserDataScreen';
import UserEmailScreen from '../screens/UserEmailScreen';
import BankAccountScreen from '../screens/BankAccountScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true,}} />
            <HomeStack.Screen name="user_bank" component={UserBankScreen} options={{headerTitle: 'User Bank', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1fa1c7'} }}/>
            <HomeStack.Screen name="user_data" component={UserDataScreen} options={{headerTitle: 'User Data', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1fa1c7'} }}/>
            <HomeStack.Screen name="user_email" component={UserEmailScreen} options={{headerTitle: 'User Email', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1fa1c7'} }}/>
            <HomeStack.Screen name="bank_account" component={BankAccountScreen} options={{headerTitle: 'Bank Account', headerTintColor: '#fff', headerTitleAlign: 'center', headerStyle: {backgroundColor: '#1fa1c7'} }}/>
        </HomeStack.Navigator>
    );
}