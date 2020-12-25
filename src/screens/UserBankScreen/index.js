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
            <StatusBar barStyle="light-content" backgroundColor="#DF274C" />

            <DivInput>
                <DefaultText font="18px" color="#DF274C">@</DefaultText>
                <Input onChangeText={(u) => setNewUser(u)} defaultValue={user} />
            </DivInput>
            <DefaultText color="#aaa">
                Always that you get paid by someone, show them this user. It's with this, that you'll be found
            </DefaultText>

            <DefaultBtn underlayColor="#BE1C3D" onPress={() => HandleEdit()}>
                <DefaultText enabled={true} color="#fff" font="18px">Update</DefaultText>
            </DefaultBtn>
        </Container>
    );
}