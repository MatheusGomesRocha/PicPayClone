import React from 'react';
import UserSvg from "../../assets/svg/user_circle.svg";
import Lock from "../../assets/svg/lock.svg";

import {DefaultText} from '../../components/DefaultText';

import {
    Container,

    MainView,
    TopView,
    InputView,
    LineDiv,
    Input,
    DefaultBtn,
    BottomView,
    TextBtn,
} from "./styled";

import {StatusBar} from "react-native";

export default () => {
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

            <MainView>
                <TopView>
                    <DefaultText font={"24px"} bolder={"bold"}>Your identification</DefaultText>
                    <DefaultText mTop={"5px"} color={"#aaa"} font={"16px"}>
                        Do not worry, your data are safe with us
                    </DefaultText>
                </TopView>
                <InputView>
                    <LineDiv>
                        <UserSvg width="25px" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input onSubmitEditing={() => console.log('olá mundo')} placeholder="User"/>
                </InputView>

                <InputView>
                    <LineDiv>
                        <Lock width="25" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input onSubmitEditing={() => console.log('olá mundo')} placeholder="password"/>
                </InputView>

                <DefaultBtn underlayColor={"#BE1C3D"}>
                    <DefaultText color={"#fff"} font={"18px"}>Login</DefaultText>
                </DefaultBtn>

                <DefaultText style={{textAlign: 'center'}} color={"#aaa"} font={"16px"} mTop={"20px"}>
                    When you creating a account in our App, you agree with our Terms and Privacy Policy
                </DefaultText>

            </MainView>
        </Container>
    );
}