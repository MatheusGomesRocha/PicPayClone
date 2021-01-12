import React, {useState, createRef} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import Api from '../../Api';

import {DefaultText} from '../../components/DefaultText';
import {DefaultBtn} from '../../components/DefaultBtn';

import {StatusBar} from 'react-native';

import {
    Container,

    DivInput,
    Input,
} from './styled';

export default () => {
    const [focus1, setFocus1] = useState('#aaa');
    const [focus2, setFocus2] = useState('#aaa');

    const [newName, setNewName] = useState('');
    const [newBirthday, setNewBirthday] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    const [id, setId] = useState(route.params.userId);
    const [name, setName] = useState(route.params.name);
    const [cpf, setCpf] = useState(route.params.cpf);
    const [birthday, setBirthday] = useState(route.params.birthday);

    const inputRef1 = createRef();
    const inputRef2 = createRef();



    const setFocusInput1 = () => {
        setFocus1('#DF274C');
        setFocus2('#aaa')
    }

    const setFocusInput2 = () => {
        setFocus2('#DF274C');
        setFocus1('#aaa')
    }

    const handleEdit = () => {
        let birthdayD = newBirthday.substr(0, 2);
        let birthdayM = newBirthday.substr(2, 2);
        let birthdayY = newBirthday.substr(4, 4);

        const birthdayFormated = birthdayD+'/'+birthdayM+'/'+birthdayY;

        if (newName && newBirthday == '') {
            Api.updateUserData(id, newName, birthday, navigation);
        } else if (newBirthday && newName == '') {
            Api.updateUserData(id, name, birthdayFormated, navigation);
        } else if (newBirthday + newName) {
            Api.updateUserData(id, newName, birthdayFormated, navigation);
        }
    }


    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C"/>


            <DivInput bbc={"#ddd"}>
                <DefaultText color="#ccc">CPF</DefaultText>
                <Input editable={false} style={{color: '#ddd'}} defaultValue={cpf}/>
            </DivInput>

            <DivInput bbc={focus1}>
                <DefaultText color={focus1}>Name</DefaultText>
                <Input onSubmitEditing={() => inputRef2.current.focus()} ref={inputRef1} returnKeyType={"next"}
                       onChangeText={nn => setNewName(nn)} onFocus={setFocusInput1} placeholder={name}
                       placeholderTextColor={"#aaa"}/>
            </DivInput>

            <DivInput bbc={focus2}>
                <DefaultText color={focus2}>Data of birth</DefaultText>
                <Input onSubmitEditing={() => inputRef1.current.focus()} ref={inputRef2} returnKeyType={"next"}
                       keyboardType={"numeric"} onChangeText={nb => setNewBirthday(nb)} onFocus={setFocusInput2}
                       placeholder={birthday}
                       placeholderTextColor={"#aaa"}/>
            </DivInput>

            <DefaultBtn disabled={newName || newBirthday ? false : true} bgColor={newName || newBirthday ? '#DF274C' : '#ccc'} underlayColor="#BE1C3D" onPress={handleEdit}>
                <DefaultText enabled={true} color="#fff" font="18px">Update</DefaultText>
            </DefaultBtn>

        </Container>
    )
}