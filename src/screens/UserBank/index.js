import React, { useState, useLayoutEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { RefreshControl, StatusBar } from 'react-native';
import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    BtnHeader,

    DivInput,
    Input
} from './styled';

export default () => {
    const [user, setUser] = useState('asasakm');
    const [newUser, setNewUser] = useState('');

    const navigation = useNavigation();
    const refInput = useRef(null); // Referência ao input

    // Ao executar handleFocus, foca o input da tela
    const HandleFocus = () => {
        refInput.current.focus();
    }

    const HandleEdit = () => {
        console.log(newUser);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                newUser.length == 0 ?
                    <BtnHeader onPress={() => HandleFocus()}>
                        <DefaultText font="16px" color="#1fa1c7" bolder="bold">Update</DefaultText>
                    </BtnHeader>
                    :
                    <BtnHeader onPress={() => HandleEdit()}>
                        <DefaultText font="16px" color="#1fa1c7" bolder="bold">Finish</DefaultText>
                    </BtnHeader>
        })
    }, [newUser])

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#eee" />

            <DivInput>
                <DefaultText font="18px" color="#1fa1c7">@</DefaultText>
                <Input onChangeText={(u) => setNewUser(u)} defaultValue={user} ref={refInput} />
            </DivInput>
            <DefaultText color="#aaa">
                Always that you get paid by someone, show them this user. It's with this, that you'll be found
            </DefaultText>
        </Container>
    );
}