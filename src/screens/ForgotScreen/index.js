import React from 'react';

import { DefaultText } from '../../components/DefaultText';

import { StatusBar } from 'react-native';

import {
    Container,

    DivInput,
    LineDiv,
    Input,

    DefaultBtn,
} from './styled';

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C" />

            <DefaultText mTop="15px" color="#aaa">
                In case you forgotten your password, enter your CPF that you used to register, in the field bellow. After that, we'll send you an email with instructions to reset your password
            </DefaultText>

            <DivInput>
                <LineDiv>
                <DefaultText mLeft="10px">CPF</DefaultText>

                </LineDiv>
                <Input placeholder="Your CPF register on PicPay" />
            </DivInput>

            <DefaultBtn onPress={() => console.log('olá mundo')} underlayColor="#BE1C3D">
                <DefaultText color="#fff" font="18px">New password</DefaultText>
            </DefaultBtn>
        </Container>
    );
}