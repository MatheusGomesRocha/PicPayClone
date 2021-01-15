import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Api from '../../Api';

import {StatusBar} from 'react-native';
import {DefaultText} from '../../components/DefaultText';
import {DefaultBtn} from '../../components/DefaultBtn';

import {
    Container,

    DivInput,
    Input,
} from './styled';

export default () => {
    const [newUser, setNewUser] = useState('');

    const navigation = useNavigation();

    const route = useRoute();

    const user = route.params.user.toLowerCase();
    const id = route.params.userId;

    const handleEdit = () => {
        Api.updateUser(id, newUser, navigation);
    }


    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C"/>

            <DivInput>
                <DefaultText font="18px" color="#DF274C">@</DefaultText>
                <Input onChangeText={(u) => setNewUser(u)} defaultValue={user}/>
            </DivInput>
            <DefaultText color="#aaa">
                Always that you get paid by someone, show them this user. It's with this, that you'll be found
            </DefaultText>

            <DefaultBtn disabled={newUser ? false : true} bgColor={newUser ? '#DF274C' : '#ccc'} underlayColor="#BE1C3D" onPress={handleEdit}>
                <DefaultText enabled={true} color="#fff" font="18px">Update</DefaultText>
            </DefaultBtn>
        </Container>
    );
}