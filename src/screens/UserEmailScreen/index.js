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
            <StatusBar barStyle="light-content" backgroundColor="#DF274C" />

            <DivInput>
                <DefaultText color="#ccc">Email</DefaultText>
                <Input defaultValue="matheusgomes192@hotmail.com" />
            </DivInput>

            <DefaultText color="#aaa" mTop="15px">You can use this email address to login or recover your password</DefaultText>

            <DefaultBtn underlayColor="#BE1C3D" >
                <DefaultText enabled={true} color="#fff" font="16px">Update</DefaultText>
            </DefaultBtn>
        </Container>
    );
}