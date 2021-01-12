import React, {useState} from 'react';

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

    const setFocusInput1 = () => {
        setFocus1('#DF274C');
        setFocus2('#aaa')
    }

    const setFocusInput2 = () => {
        setFocus2('#DF274C');
        setFocus1('#aaa')
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C"/>


            <DivInput bbc={"#ddd"}>
                <DefaultText color="#ccc">CPF</DefaultText>
                <Input style={{color: '#ddd'}} defaultValue="063.***.***-**"/>
            </DivInput>

            <DivInput bbc={focus1}>
                <DefaultText color={focus1}>Name</DefaultText>
                <Input onFocus={setFocusInput1} defaultValue="Matheus Gomes"/>
            </DivInput>

            <DivInput bbc={focus2}>
                <DefaultText color={focus2}>Data of birth</DefaultText>
                <Input onFocus={setFocusInput2} defaultValue="02/04/2001"/>
            </DivInput>

            <DefaultBtn bgColor={"#DF274C"} underlayColor="#BE1C3D" onPress={() => HandleEdit()}>
                <DefaultText enabled={true} color="#fff" font="18px">Update</DefaultText>
            </DefaultBtn>

        </Container>
    )
}