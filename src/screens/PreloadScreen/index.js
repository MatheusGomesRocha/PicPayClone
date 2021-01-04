import React, {useEffect} from 'react';
import Bg from '../../assets/img/back_img.jpg';
import {useNavigation} from '@react-navigation/native';

import {DefaultText} from '../../components/DefaultText';

import {
    Container,
    PreloadView,

    Img,

    MainView,
    DefaultBtn,
} from './styled';

import {StatusBar, ActivityIndicator} from "react-native";
import {useSelector} from "react-redux";

export default () => {
    const navigation = useNavigation();
    const email = useSelector(state => state.user.email);

    useEffect(() => {
        if (email) {
            setTimeout(() => {
                navigation.reset({
                    routes: [
                        {name: 'apptab'},
                    ]
                });
            }, 1000)
        }
    }, [])

    if (email) {
        return (
            <PreloadView>
                <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

                <ActivityIndicator size="large" color="#DF274C" />
            </PreloadView>
        );
    } else {
        return (
            <Container>
                <StatusBar barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0.5)"/>

                <Img source={Bg}>
                    <MainView>
                        <DefaultText style={{marginRight: 40, marginBottom: 30}} bolder={"bold"} color={"#fff"}
                                     font={"24px"}>
                            With Bankidô, you payment it's more easy and safe
                        </DefaultText>
                        <DefaultBtn onPress={() => navigation.navigate('login')} underlayColor={"#BE1C3D"}
                                    border={"none"}
                                    bg={"#DF274C"}>
                            <DefaultText font={"16px"} color={'#fff'}>Login</DefaultText>
                        </DefaultBtn>

                        <DefaultBtn onPress={() => navigation.navigate('register')} underlayColor={"#fff"}>
                            <DefaultText font={"16px"} color={'#fff'}>Register</DefaultText>
                        </DefaultBtn>
                    </MainView>
                </Img>

            </Container>
        );
    }

}