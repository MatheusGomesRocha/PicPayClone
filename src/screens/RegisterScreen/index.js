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

    const [focus1, setFocus1] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [focus3, setFocus3] = useState(false);
    const [focus4, setFocus4] = useState(false);
    const [focus5, setFocus5] = useState(false);
    const [focus6, setFocus6] = useState(false);

    const navigation = useNavigation();

    const inputEmail = createRef();
    const inputCpf = createRef();
    const inputBirthday = createRef();
    const inputPass = createRef();
    const inputConfirmPass = createRef();

    const setInputFocus1 = () => {
        setFocus1(true);
        setFocus2(false);
        setFocus3(false);
        setFocus4(false);
        setFocus5(false);
        setFocus6(false);
    }

    const setInputFocus2 = () => {
        setFocus1(false);
        setFocus2(true);
        setFocus3(false);
        setFocus4(false);
        setFocus5(false);
        setFocus6(false);
    }

    const setInputFocus3 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(true);
        setFocus4(false);
        setFocus5(false);
        setFocus6(false);
    }

    const setInputFocus4 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(false);
        setFocus4(true);
        setFocus5(false);
        setFocus6(false);
    }

    const setInputFocus5 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(false);
        setFocus4(false);
        setFocus5(true);
        setFocus6(false);
    }

    const setInputFocus6 = () => {
        setFocus1(false);
        setFocus2(false);
        setFocus3(false);
        setFocus4(false);
        setFocus5(false);
        setFocus6(true);
    }

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

                    <InputView bc={focus1 ? '#DF274C' : '#ccc'}>
                        <LineDiv brc={focus1 ? '#DF274C' : '#ccc'}>
                            <UserSvg width="25px" height="25px" fill={focus1 ? '#DF274C' : '#ccc'}/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputEmail.current.focus()} value={name}
                               onChangeText={n => setName(n)} placeholder="Your name" onFocus={setInputFocus1}/>
                    </InputView>

                    <InputView bc={focus2 ? '#DF274C' : '#ccc'}>
                        <LineDiv brc={focus2 ? '#DF274C' : '#ccc'}>
                            <EmailSvg width="25px" height="25px" fill={focus2 ? '#DF274C' : '#ccc'}/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputCpf.current.focus()} ref={inputEmail}
                               keyboardType={"email-address"} value={email}
                               onChangeText={e => setEmail(e)} onFocus={setInputFocus2}
                               placeholder="E-mail"/>
                    </InputView>

                    <InputView bc={focus3 ? '#DF274C' : '#ccc'}>
                        <LineDiv brc={focus3 ? '#DF274C' : '#ccc'}>
                            <Id width="25px" height="25px" fill={focus3 ? '#DF274C' : '#ccc'}/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputBirthday.current.focus()}
                               ref={inputCpf} keyboardType={"numeric"} value={cpf} onChangeText={c => setCpf(c)}
                               onFocus={setInputFocus3}
                               placeholder="CPF"/>
                    </InputView>

                    <InputView bc={focus4 ? '#DF274C' : '#ccc'}>
                        <LineDiv brc={focus4 ? '#DF274C' : '#ccc'}>
                            <Birthday width="25px" height="25px" fill={focus4 ? '#DF274C' : '#ccc'}/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputPass.current.focus()}
                               ref={inputBirthday} keyboardType={"numeric"} value={birthday}
                               onChangeText={b => setBirthday(b)}
                               placeholder="Date of Birth" onFocus={setInputFocus4}/>
                    </InputView>

                    <InputView bc={focus5 ? '#DF274C' : '#ccc'}>
                        <LineDiv brc={focus5 ? '#DF274C' : '#ccc'}>
                            <Lock width="25px" height="25px" fill={focus5 ? '#DF274C' : '#ccc'}/>
                        </LineDiv>
                        <Input returnKeyType={"next"} onSubmitEditing={() => inputConfirmPass.current.focus()}
                               ref={inputPass} value={pass} onChangeText={p => setPass(p)} secureTextEntry={securePass}
                               placeholder="Password (7+ caracters)" onFocus={setInputFocus5}/>
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

                    <InputView bc={focus6 ? '#DF274C' : '#ccc'}>
                        <LineDiv brc={focus6 ? '#DF274C' : '#ccc'}>
                            <Lock width="25px" height="25px" fill={focus6 ? '#DF274C' : '#ccc'}/>
                        </LineDiv>
                        <Input value={confirmPass} onChangeText={cp => setConfirmPass(cp)} secureTextEntry={securePass1}
                               placeholder="Confirm password" ref={inputConfirmPass} onFocus={setInputFocus6}/>
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