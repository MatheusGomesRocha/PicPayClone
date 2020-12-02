import React from 'react';

import { StatusBar } from 'react-native';
import Img1 from '../../assets/img/895719.png';

import { DefaultText } from '../../components/DefaultText';

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
            <StatusBar barStyle="light-content" backgroundColor="#1fa1c7" />

            <DefaultText font="16px" color="#999" mTop="15px">My account</DefaultText>

            <AccountView>
                <LeftView>
                    <Img source={Img1} />
                </LeftView>
                <CenterView>
                    <DefaultText>Account: 541807-0</DefaultText>
                    <DefaultText>Agency: 541807-0</DefaultText>
                    <DefaultText color="#aaa">BANCO BRADESCO</DefaultText>
                </CenterView>
            </AccountView>

            <DefaultBtn bgColor="#1fa1c7">
                <DefaultText color="#fff">Change bank account</DefaultText>
            </DefaultBtn>

            <DefaultBtn border="1px solid red">
                <DefaultText color="red">Remove this account</DefaultText>
            </DefaultBtn>
            
        </Container>
    );
}