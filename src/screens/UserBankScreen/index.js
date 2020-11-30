import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    DivInput,
    Input,

    DefaultBtn,
} from './styled';

export default () => {
    const [user, setUser] = useState('asasakm');
    const [newUser, setNewUser] = useState('');

    const navigation = useNavigation();


    const HandleEdit = () => {
        console.log(newUser);
    }



    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#1fa1c7" />

            <DivInput>
                <DefaultText font="18px" color="#1fa1c7">@</DefaultText>
                <Input onChangeText={(u) => setNewUser(u)} defaultValue={user} />
            </DivInput>
            <DefaultText color="#aaa">
                Always that you get paid by someone, show them this user. It's with this, that you'll be found
            </DefaultText>

            <DefaultBtn underlayColor="#1D94B8" onPress={() => HandleEdit()}>
                <DefaultText enabled={true} color="#fff" font="16px">Salvar</DefaultText>
            </DefaultBtn>
        </Container>
    );
}