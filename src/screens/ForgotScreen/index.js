import React from 'react';

import { DefaultText } from '../../components/DefaultText';

import { StatusBar } from 'react-native';

import {
    Container,

    DivInput,
    Input,

    DefaultBtn,
} from './styled';

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#1fa1c7" />

            <DefaultText mTop="15px" color="#aaa">
                In case you forgotten your password, enter your CPF that you used to register, in the field bellow. After that, we'll send you an email with instructions to reset your password
            </DefaultText>

            <DivInput>
                <DefaultText mLeft="10px">CPF</DefaultText>
                <Input placeholder="Your CPF register on PicPay" />
            </DivInput>

            <DefaultBtn onPress={() => console.log('olá mundo')} underlayColor="#1D94B8">
                <DefaultText color="#fff">New password</DefaultText>
            </DefaultBtn>
        </Container>
    );
}