import React, {useState} from 'react';
import UserSvg from "../../assets/svg/user_circle.svg";
import Lock from "../../assets/svg/lock.svg";
import Id from "../../assets/svg/id.svg";
import Birthday from "../../assets/svg/birthday.svg";
import EyeOff from "../../assets/svg/eye_off.svg";
import EyeOn from "../../assets/svg/eye_on.svg";

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

export default () => {
    const [securePass, setSecurePass] = useState(true);
    const [securePass1, setSecurePass1] = useState(true);

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

            <MainView>
                <TopView>
                    <DefaultText font={"24px"} bolder={"bold"} color={"#DF274C"}>Create your account</DefaultText>
                    <DefaultText mTop={"5px"} color={"#aaa"} font={"16px"}>
                        Do not worry, your data are safe with us
                    </DefaultText>
                </TopView>

                <InputView>
                    <LineDiv>
                        <UserSvg width="25px" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input onSubmitEditing={() => console.log('olá mundo')} placeholder="E-mail"/>
                </InputView>

                <InputView>
                    <LineDiv>
                        <Id width="25px" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input onSubmitEditing={() => console.log('olá mundo')} placeholder="CPF"/>
                </InputView>

                <InputView>
                    <LineDiv>
                        <Birthday width="25px" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input onSubmitEditing={() => console.log('olá mundo')} placeholder="Date of Birth"/>
                </InputView>

                <InputView>
                    <LineDiv>
                        <Lock width="25px" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input secureTextEntry={securePass} onSubmitEditing={() => console.log('olá mundo')}
                           placeholder="Password"/>
                    {securePass ?
                        <>
                            <BtnEye onPress={() => setSecurePass(false)}>
                                <EyeOff fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                            </BtnEye>
                        </>
                        :
                        <>
                            <BtnEye onPress={() => setSecurePass(true)}>
                                <EyeOn fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                            </BtnEye>
                        </>
                    }
                </InputView>

                <InputView>
                    <LineDiv>
                        <Lock width="25px" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input secureTextEntry={securePass1} onSubmitEditing={() => console.log('olá mundo')}
                           placeholder="Confirm password"/>
                    {securePass1 ?
                        <>
                            <BtnEye onPress={() => setSecurePass1(false)}>
                                <EyeOff fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                            </BtnEye>
                        </>
                        :
                        <>
                            <BtnEye onPress={() => setSecurePass1(true)}>
                                <EyeOn fill="#000" width={30} height={30} style={{marginRight: 10}}/>
                            </BtnEye>
                        </>
                    }
                </InputView>

                <DefaultBtn underlayColor={"#BE1C3D"}>
                    <DefaultText color={"#fff"} font={"18px"}>Create</DefaultText>
                </DefaultBtn>

                <DefaultText style={{textAlign: 'center'}} color={"#aaa"} font={"16px"} mTop={"20px"}>
                    When you creating a account in our App, you agree with our Terms and Privacy Policy
                </DefaultText>

            </MainView>
        </Container>
    );
}