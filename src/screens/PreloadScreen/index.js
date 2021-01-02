import React from 'react';
import Bg from '../../assets/img/back_img.jpg';

import {DefaultText} from '../../components/DefaultText';

import {
    Container,

    Img,

    MainView,
    DefaultBtn,
} from './styled';

import {StatusBar} from "react-native";

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0.5)"/>

            <Img source={Bg}>
                <MainView>
                    <DefaultText style={{marginRight: 40, marginBottom: 30}} bolder={"bold"} color={"#fff"}
                                 font={"24px"}>
                        With Bankidô, you payment it's more easy and safe
                    </DefaultText>
                    <DefaultBtn underlayColor={"#BE1C3D"} border={"none"} bg={"#DF274C"}>
                        <DefaultText font={"16px"} color={'#fff'}>Login</DefaultText>
                    </DefaultBtn>

                    <DefaultBtn underlayColor={"#fff"}>
                        <DefaultText font={"16px"} color={'#fff'}>Register</DefaultText>
                    </DefaultBtn>
                </MainView>
            </Img>

        </Container>
    );
}