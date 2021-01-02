import React, {useState} from 'react';
import UserSvg from "../../assets/svg/user_circle.svg";
import Lock from "../../assets/svg/lock.svg";
import {useNavigation} from '@react-navigation/native';

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
import {BtnEye} from "../RedefineScreen/styled";
import EyeOff from "../../assets/svg/eye_off.svg";
import EyeOn from "../../assets/svg/eye_on.svg";

export default () => {
    const [securePass, setSecurePass] = useState(true);

    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

            <MainView>
                <TopView>
                    <DefaultText font={"24px"} bolder={"bold"} color={"#DF274C"}>Your identification</DefaultText>
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
                    <Input secureTextEntry={securePass} onSubmitEditing={() => console.log('olá mundo')} placeholder="password"/>
                    {securePass ?
                        <>
                            <BtnEye onPress={() => setSecurePass(false)}>
                                <EyeOff fill="#000" width={30} height={30} style={{ marginRight: 10 }} />
                            </BtnEye>
                        </>
                        :
                        <>
                            <BtnEye onPress={() => setSecurePass(true)}>
                                <EyeOn fill="#000" width={30} height={30} style={{ marginRight: 10 }} />
                            </BtnEye>
                        </>
                    }
                </InputView>

                <DefaultBtn underlayColor={"#BE1C3D"}>
                    <DefaultText color={"#fff"} font={"18px"}>Login</DefaultText>
                </DefaultBtn>

                <TextBtn onPress={() => navigation.navigate('forgot')}>
                    <DefaultText color={"#DF274C"} deco={"underline"} bolder={"bold"} font={"16px"}>Forgot your password?</DefaultText>
                </TextBtn>

            </MainView>
        </Container>
    );
}