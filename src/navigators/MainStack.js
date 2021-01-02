import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreloadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AppTab from './AppTab';
import UserBankScreen from '../screens/UserBankScreen';
import UserDataScreen from '../screens/UserDataScreen';
import UserEmailScreen from '../screens/UserEmailScreen';
import BankAccountScreen from '../screens/BankAccountScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ForgotScreen from '../screens/ForgotScreen';
import RedefineScreen from '../screens/RedefineScreen';
import NotificationAlertScreen from '../screens/NotificationAlertScreen';
import QuestionScreen from '../screens/QuestionScreen';
import HelpScreen from '../screens/HelpScreen';

const HomeStack = createStackNavigator();

export default () => {
    const [user, setUser] = useState();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="preload" component={PreloadScreen} options={{headerTitle: null, headerTransparent: true,}}/>
            <HomeStack.Screen name="login" component={LoginScreen} options={{headerTitle: null, headerTransparent: true,}}/>
            <HomeStack.Screen name="register" component={RegisterScreen} options={{headerTitle: null, headerTransparent: true,}}/>

            <HomeStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true,}}/>
            <HomeStack.Screen name="user_bank" component={UserBankScreen} options={{
                headerTitle: 'User Bank',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="user_data" component={UserDataScreen} options={{
                headerTitle: 'User Data',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="user_email" component={UserEmailScreen} options={{
                headerTitle: 'User Email',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="bank_account" component={BankAccountScreen} options={{
                headerTitle: 'Bank Account',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="favorite" component={FavoriteScreen} options={{
                headerTitle: 'Favorites',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="forgot" component={ForgotScreen} options={{
                headerTitle: 'Forgot Password',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="redefine" component={RedefineScreen} options={{
                headerTitle: 'Reset Password',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="notification_alert" component={NotificationAlertScreen} options={{
                headerTitle: 'Notifications',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="question" component={QuestionScreen} options={{
                headerTitle: 'Questions',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
            <HomeStack.Screen name="help" component={HelpScreen} options={{
                headerTitle: 'Help',
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerStyle: {backgroundColor: '#DF274C'}
            }}/>
        </HomeStack.Navigator>
    );
}