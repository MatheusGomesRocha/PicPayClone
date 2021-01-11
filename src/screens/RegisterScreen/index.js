import React, {useState, createRef} from 'react';
import UserSvg from "../../assets/svg/user_circle.svg";
import EmailSvg from "../../assets/svg/email.svg";
import Lock from "../../assets/svg/lock.svg";
import Id from "../../assets/svg/id.svg";
import Birthday from "../../assets/svg/birthday.svg";
import EyeOff from "../../assets/svg/eye_off.svg";
import EyeOn from "../../assets/svg/eye_on.svg";
import Api from '../../Api';
import {useNavigation} from '@react-navigation/native';

import {DefaultText} from '../../components/DefaultText';
import {DefaultBtn} from '../../components/DefaultBtn';

import {
    Container,

    Scroll,

    MainView,
    TopView,
    InputView,
    LineDiv,
    Input,
    BottomView,
    TextBtn,
} from "./styled";

import {Alert, StatusBar} from "react-native";
import {BtnEye} from "../RedefineScreen/styled";

export default () => {
    const [securePass, setSecurePass] = useState(true);
    const [securePass1, setSecurePass1] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthday, setBirthday] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(true);

    const navigation = useNavigation();

    const inputEmail = createRef();
    const inputCpf = createRef();
    const inputBirthday = createRef();
    const inputPass = createRef();
    const inputConfirmPass = createRef();

    const createAccount = () => {
        Api.signUp(name, email, cpf, birthday, pass, navigation);
    }


    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

            <Scroll>

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
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputEmail.current.focus()} value={name}
                               onChangeText={n => setName(n)} placeholder="Your name"/>
                    </InputView>

                    <InputView>
                        <LineDiv>
                            <EmailSvg width="25px" height="25px" fill="#DF274C"/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputCpf.current.focus()} ref={inputEmail}
                               keyboardType={"email-address"} value={email} onChangeText={e => setEmail(e)}
                               placeholder="E-mail"/>
                    </InputView>

                    <InputView>
                        <LineDiv>
                            <Id width="25px" height="25px" fill="#DF274C"/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputBirthday.current.focus()}
                               ref={inputCpf} keyboardType={"numeric"} value={cpf} onChangeText={c => setCpf(c)}
                               placeholder="CPF"/>
                    </InputView>

                    <InputView>
                        <LineDiv>
                            <Birthday width="25px" height="25px" fill="#DF274C"/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputPass.current.focus()}
                               ref={inputBirthday} keyboardType={"numeric"} value={birthday}
                               onChangeText={b => setBirthday(b)}
                               placeholder="Date of Birth"/>
                    </InputView>

                    <InputView>
                        <LineDiv>
                            <Lock width="25px" height="25px" fill="#DF274C"/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputConfirmPass.current.focus()}
                               ref={inputPass} value={pass} onChangeText={p => setPass(p)} secureTextEntry={securePass}
                               placeholder="Password (7+ caracters)"/>
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
                        <Input value={confirmPass} onChangeText={cp => setConfirmPass(cp)} secureTextEntry={securePass1}
                               placeholder="Confirm password" ref={inputConfirmPass}/>
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

                    <DefaultBtn
                        bgColor={name && email && cpf && birthday && pass && pass == confirmPass ? '#DF274C' : '#ccc'}
                        disabled={name && email && cpf && birthday && pass && pass == confirmPass ? false : true}
                        onPress={createAccount} underlayColor={"#BE1C3D"}>
                        <DefaultText color={"#fff"} font={"18px"}>Create</DefaultText>
                    </DefaultBtn>

                    <DefaultText style={{textAlign: 'center'}} color={"#aaa"} font={"16px"} mTop={"20px"}>
                        When you creating a account in our App, you agree with our Terms and Privacy Policy
                    </DefaultText>
                </MainView>

            </Scroll>


        </Container>
    );
}