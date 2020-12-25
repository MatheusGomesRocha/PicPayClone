import React, { useState } from 'react';
import Lock from '../../assets/svg/lock.svg';
import EyeOn from '../../assets/svg/eye_on.svg';
import EyeOff from '../../assets/svg/eye_off.svg';

import { DefaultText } from '../../components/DefaultText';

import { StatusBar } from 'react-native';

import {
    Container,

    DivInput,
    LineDiv,
    Input,
    BtnEye,

    DefaultBtn,
} from './styled';

export default () => {
    const [currentFocus, setCurrentFocus] = useState(false);
    const [newFocus, setNewFocus] = useState(false);
    const [confirmFocus, setConfirmFocus] = useState(false);

    const [securePass, setSecurePass] = useState(true);
    const [securePass1, setSecurePass1] = useState(true);
    const [securePass2, setSecurePass2] = useState(true);

    const FocusInput = (input) => {
        if (input === 'current') {
            setCurrentFocus(true);
            setNewFocus(false);
            setConfirmFocus(false);
        } else if (input === 'new') {
            setCurrentFocus(false);
            setNewFocus(true);
            setConfirmFocus(false);
        } else if (input === 'confirm') {
            setCurrentFocus(false);
            setNewFocus(false);
            setConfirmFocus(true);
        }

    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C" />

            <DefaultText font="16px" mTop="15px" color="#aaa">
                If you want to reset your password, please, confirm your current password and then choose a new one
            </DefaultText>

            <DivInput>
                <LineDiv>
                    <Lock width="20px" height="20px" fill={currentFocus ? '#000' : '#ccc'} />
                </LineDiv>
                <Input onFocus={() => FocusInput('current')} secureTextEntry={securePass} placeholderTextColor="#aaa" placeholder="Current password" />
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
            </DivInput>

            <DivInput>
                <LineDiv>
                    <Lock width="20px" height="20px" fill={newFocus ? '#000' : '#ccc'} />
                </LineDiv>
                <Input onFocus={() => FocusInput('new')} secureTextEntry={securePass1} placeholderTextColor="#aaa" placeholder="New password" />
                {securePass1 ?
                    <>
                        <BtnEye onPress={() => setSecurePass1(false)}>
                            <EyeOff fill="#000" width={30} height={30} style={{ marginRight: 10 }} />
                        </BtnEye>
                    </>
                    :
                    <>
                        <BtnEye onPress={() => setSecurePass1(true)}>
                            <EyeOn fill="#000" width={30} height={30} style={{ marginRight: 10 }} />
                        </BtnEye>
                    </>
                }
            </DivInput>

            <DivInput>
                <LineDiv>
                    <Lock width="20px" height="20px" fill={confirmFocus ? '#000' : '#ccc'} />
                </LineDiv>
                <Input onFocus={() => FocusInput('confirm')} secureTextEntry={securePass2}  placeholderTextColor="#aaa" placeholder="Confirm new password" />
                {securePass2 ?
                    <>
                        <BtnEye onPress={() => setSecurePass2(false)}>
                            <EyeOff fill="#000" width={30} height={30} style={{ marginRight: 10 }} />
                        </BtnEye>
                    </>
                    :
                    <>
                        <BtnEye onPress={() => setSecurePass2(true)}>
                            <EyeOn fill="#000" width={30} height={30} style={{ marginRight: 10 }} />
                        </BtnEye>
                    </>
                }
            </DivInput>

            <DefaultBtn onPress={() => console.log('olá mundo')} underlayColor="#BE1C3D">
                <DefaultText font="18px" color="#fff">Confirm reset</DefaultText>
            </DefaultBtn>
        </Container>
    );
}