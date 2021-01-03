import React, {useState} from 'react';
import UserSvg from "../../assets/svg/user_circle.svg";
import Lock from "../../assets/svg/lock.svg";
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import Api from '../../Api';

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

function Login(props) {
    const [securePass, setSecurePass] = useState(true);

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const navigation = useNavigation();

    const doLogin = () => {
        Api.login(user, pass, navigation, props.setEmail);
    }

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
                    <Input value={user} onChangeText={u => setUser(u)} placeholder="User"/>
                </InputView>

                <InputView>
                    <LineDiv>
                        <Lock width="25" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input value={pass} onChangeText={p => setPass(p)} secureTextEntry={securePass}
                           placeholder="password"/>
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

                <DefaultBtn onPress={doLogin} underlayColor={"#BE1C3D"}>
                    <DefaultText color={"#fff"} font={"18px"}>Login</DefaultText>
                </DefaultBtn>

                <TextBtn onPress={() => navigation.navigate('forgot')}>
                    <DefaultText color={"#DF274C"} deco={"underline"} bolder={"bold"} font={"16px"}>Forgot your
                        password?</DefaultText>
                </TextBtn>

            </MainView>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: (email) => dispatch({type: 'SET_EMAIL', payload: {email}})
    }
}

export default connect(null, mapDispatchToProps)(Login);
