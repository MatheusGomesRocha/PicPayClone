import React from 'react';

import {StatusBar} from 'react-native';
import Img1 from '../../assets/img/895719.png';

import {DefaultText} from '../../components/DefaultText';

import {
    Container,

    AccountView,
    LeftView,
    Img,
    CenterView,

    DefaultBtn
} from './styled';

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C"/>

            <DefaultText font="16px" color="#999" mTop="15px">My account</DefaultText>

            <AccountView>
                <LeftView>
                    <Img source={Img1}/>
                </LeftView>
                <CenterView>
                    <DefaultText>Account: 541807-0</DefaultText>
                    <DefaultText>Agency: 541807-0</DefaultText>
                    <DefaultText color="#aaa">BANCO BRADESCO</DefaultText>
                </CenterView>
            </AccountView>

            <DefaultBtn bgColor="#DF274C" underlayColor="#BE1C3D">
                <DefaultText color="#fff">Change bank account</DefaultText>
            </DefaultBtn>

            <DefaultBtn border="1px solid #BE1C3D" underlayColor="#BE1C3D">
                <DefaultText color="#BE1C3D">Remove this account</DefaultText>
            </DefaultBtn>

        </Container>
    );
}