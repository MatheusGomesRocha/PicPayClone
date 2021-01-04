import React, {useState, createRef} from 'react';
import EmailSvg from "../../assets/svg/email.svg";
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
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const inputPass = createRef();

    const navigation = useNavigation();

    const doLogin = () => {
        Api.login(email, pass, navigation, props.setEmail);
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
                        <EmailSvg width="25px" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input onSubmitEditing={() => inputPass.current.focus()} returnKeyType={"next"}
                           keyboardType={"email-address"} value={email} onChangeText={e => setEmail(e)}
                           placeholder="Email"/>
                </InputView>

                <InputView>
                    <LineDiv>
                        <Lock width="25" height="25px" fill="#DF274C"/>
                    </LineDiv>
                    <Input ref={inputPass} value={pass} onChangeText={p => setPass(p)} secureTextEntry={securePass}
                           placeholder="Password" onSubmitEditing={doLogin}/>
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

                <DefaultBtn bgColor={email && pass ? '#DF274C' : '#ccc'}
                            disabled={email && pass ? false : true} onPress={doLogin} underlayColor={"#BE1C3D"}>
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
        setEmail: (email) => dispatch({type: 'SET_EMAIL', payload: {email}}),
    }
}

export default connect(null, mapDispatchToProps)(Login);
