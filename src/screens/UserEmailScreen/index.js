import React, {useState} from 'react';
import Api from '../../Api';
import {useNavigation, useRoute} from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { DefaultText } from '../../components/DefaultText';
import { DefaultBtn } from '../../components/DefaultBtn';

import {
    Container,

    DivInput,
    Input,
} from './styled';

export default () => {
    const [newEmail, setNewEmail] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    const id = route.params.userId;
    const email = route.params.email.toLowerCase();

    const handleEdit = () => {
        return(
            Api.updateEmail(id, newEmail, navigation)
        );
    }
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C" />

            <DivInput>
                <DefaultText color="#ccc">Email</DefaultText>
                <Input keyboardType={"email-address"} onChangeText={e=>setNewEmail(e)} placeholder={email} />
            </DivInput>

            <DefaultText color="#aaa" mTop="15px">You can use this email address to login or recover your password</DefaultText>

            <DefaultBtn onPress={handleEdit} disabled={newEmail ? false : true} bgColor={newEmail ? '#DF274C' : '#ccc'} underlayColor="#BE1C3D" >
                <DefaultText enabled={true} color="#fff" font="16px">Update</DefaultText>
            </DefaultBtn>
        </Container>
    );
}