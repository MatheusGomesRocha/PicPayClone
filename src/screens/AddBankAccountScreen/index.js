import React from 'react';

import {DefaultText} from '../../components/DefaultText';

import {
    Container,

    Input,
    DivInputRow,
    DefaultView,
    DefaultBtn
} from './styled';

export default () => {
    return (
        <Container>
            <DefaultText mTop={"15px"} font={"16px"} color={"#aaa"}>To transfer money from Bankidô to your bank account, you need to
                register a account firts</DefaultText>

            <Input placeholder={"Account number"}/>

            <DivInputRow>
                <Input width={"70%"} placeholder={"Agency number"}/>
                <Input width={"25%"} placeholder={"Digit"}/>
            </DivInputRow>

            <Input placeholder={"Account type"}/>
            <Input placeholder={"Bank"}/>

            <DefaultView>
                <DefaultText>This bank account isn't mine</DefaultText>
            </DefaultView>

            <DefaultBtn>
                <DefaultText color={"#fff"} font={"16px"}>Save</DefaultText>
            </DefaultBtn>
        </Container>
    );
}