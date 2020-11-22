import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTab from './AppTab';
import UserBank from '../screens/UserBank';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true,}} />
            <HomeStack.Screen name="userbank" component={UserBank} options={{headerTitle: 'UserBank', headerStyle: {backgroundColor: '#eee'} }}/>
        </HomeStack.Navigator>
    );
}