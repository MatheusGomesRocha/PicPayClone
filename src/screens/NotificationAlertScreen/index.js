import React, { useState } from 'react';

import { StatusBar, Switch } from 'react-native';

import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    ItemView,
} from './styled';


export default () => {
    const [notification1, setNotification1] = useState(false);
    const [notification2, setNotification2] = useState(false);
    const [notification3, setNotification3] = useState(false);
    const [notification4, setNotification4] = useState(false);
    const [notification5, setNotification5] = useState(false);

    const [notification6, setNotification6] = useState(false);

    const handleNotification1 = () => {
        if (notification1 == false) {
            setNotification1(true);
        } else {
            setNotification1(false);
        }
    }

    const handleNotification2 = () => {
        if (notification2 == false) {
            setNotification2(true);
        } else {
            setNotification2(false);
        }
    }

    const handleNotification3 = () => {
        if (notification3 == false) {
            setNotification3(true);
        } else {
            setNotification3(false);
        }
    }

    const handleNotification4 = () => {
        if (notification4 == false) {
            setNotification4(true);
        } else {
            setNotification4(false);
        }
    }

    const handleNotification5 = () => {
        if (notification5 == false) {
            setNotification5(true);
        } else {
            setNotification5(false);
        }
    }

    const handleNotification6 = () => {
        if (notification6 == false) {
            setNotification6(true);
        } else {
            setNotification6(false);
        }
    }
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C" />

            <DefaultText mTop="10px" color="#DF274C">Receive notifications by cellphone</DefaultText>

            <ItemView style={{marginTop: 15}}>
                <DefaultText>New payments</DefaultText>
                <Switch thumbColor={notification1 ? '#E54F6D' : '#eee'} value={notification1} onChange={handleNotification1} />
            </ItemView>

            <ItemView>
                <DefaultText>New followers</DefaultText>
                <Switch thumbColor={notification2 ? '#E54F6D' : '#eee'} value={notification2} onChange={handleNotification2} />
            </ItemView>

            <ItemView>
                <DefaultText>New likes</DefaultText>
                <Switch thumbColor={notification3 ? '#E54F6D' : '#eee'} value={notification3} onChange={handleNotification3} />
            </ItemView>

            <ItemView>
                <DefaultText>New comments</DefaultText>
                <Switch thumbColor={notification4 ? '#E54F6D' : '#eee'} value={notification4} onChange={handleNotification4} />
            </ItemView>

            <ItemView>
                <DefaultText>News and promotions</DefaultText>
                <Switch thumbColor={notification5 ? '#E54F6D' : '#eee'} value={notification5} onChange={handleNotification5} />
            </ItemView>

            <DefaultText mTop="25px" color="#DF274C">Receive notifications by e-mail</DefaultText>

            <ItemView style={{marginTop: 10}}>
                <DefaultText>New payments</DefaultText>
                <Switch thumbColor={notification6 ? '#E54F6D' : '#eee'} value={notification6} onChange={handleNotification6} />
            </ItemView>

        </Container>
    );
}