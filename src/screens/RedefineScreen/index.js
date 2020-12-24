import React from 'react';
import Star from '../../assets/svg/star.svg';
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
            <StatusBar barStyle="light-content" backgroundColor="#1fa1c7" />

            <DefaultText font="16px" mTop="15px" color="#aaa">
                If you want to reset your password, please, confirm your current password and then choose a new one 
            </DefaultText>

            <DivInput>
                <LineDiv>
                    <Star width="20px" height="20px" fill="red"/>
                </LineDiv>
                <Input placeholderTextColor="#aaa" placeholder="Current password" />
            </DivInput>

            <DivInput>
                <LineDiv>
                    <Star width="20px" height="20px" fill="red"/>
                </LineDiv>
                <Input placeholderTextColor="#aaa" placeholder="New password" />
            </DivInput>

            <DivInput>
                <LineDiv>
                    <Star width="20px" height="20px" fill="red"/>
                </LineDiv>
                <Input placeholderTextColor="#aaa" placeholder="Confirm new password" />
            </DivInput>

            <DefaultBtn onPress={() => console.log('olá mundo')} underlayColor="#1D94B8">
                <DefaultText font="16px" color="#fff">Confirm reset</DefaultText>
            </DefaultBtn>
        </Container>
    );
}