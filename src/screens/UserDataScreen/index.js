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

            <DivInput>
                <DefaultText color="#ccc">Name</DefaultText>
                <Input defaultValue="Matheus Gomes" />
            </DivInput>

            <DivInput>
                <DefaultText color="#ccc">CPF</DefaultText>
                <Input defaultValue="063.***.***-**" />
            </DivInput>

            <DivInput>
                <DefaultText color="#ccc">Data of birth</DefaultText>
                <Input defaultValue="02/04/2001" />
            </DivInput>

            <DefaultBtn underlayColor="#1D94B8" onPress={() => HandleEdit()}>
                <DefaultText enabled={true} color="#fff" font="16px">Update</DefaultText>
            </DefaultBtn>

        </Container>
    )
}