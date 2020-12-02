import React from 'react';

import { StatusBar } from 'react-native';

import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    DivInput,
    Input,

    DefaultBtn
} from './styled';

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#1fa1c7" />

            <DivInput>
                <DefaultText color="#ccc">Email</DefaultText>
                <Input defaultValue="matheusgomes192@hotmail.com" />
            </DivInput>

            <DefaultText color="#aaa" mTop="15px">You can use this email address to login or recover your password</DefaultText>

            <DefaultBtn underlayColor="#1D94B8" >
                <DefaultText enabled={true} color="#fff" font="16px">Update</DefaultText>
            </DefaultBtn>
        </Container>
    );
}