import React, { useState } from 'react';
import img from '../../assets/img/895719.png';
import { useNavigation } from '@react-navigation/native';

import { DefaultText } from '../../components/DefaultText';

import { StatusBar, Modal } from 'react-native';

import {
    Container,

    Scroll,

    ModalView,
    ModalItemView,
    ModalTitle,
    ModalBtn,

    BtnAbsolute,
    TextAbsolute,

    Header,
    UserImg,
    TextBtn,

    MainContent,
    DefaultBtn,
    BtnText,
    BtnSubText,

    DefaultBlock,
    BlockText,
} from './styled';

let arrayBtnBig = [
    { id: '1', content: 'Bankidô', subContent: '@matheus.gomes1039', screen: 'user_bank' },
    { id: '2', content: 'Personal data', subContent: 'Name, CPF e Data of birth', screen: 'user_data' },
    { id: '3', content: 'E-mail', subContent: 'mat**********92@hotmail.com', screen: 'user_email' },
];

let arrayBtn = [
    { id: '1', content: 'Bank Account', screen: 'bank_account' },
    { id: '2', content: 'Id validation', screen: 'id_validation' },
    { id: '3', content: 'My addresses', screen: 'adress' },
    { id: '4', content: 'Favorites', screen: 'favorite' },
    { id: '5', content: 'PIX', screen: 'pix' },
];

export default () => {
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const ModalNavigateForgot = () => {
        navigation.navigate('forgot');
        setModalVisible(false);
    }

    const ModalNavigateRedefine = () => {
        navigation.navigate('redefine');
        setModalVisible(false);
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#eee" />

            <Scroll>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ModalView>
                        <ModalItemView>
                            <ModalBtn onPress={ModalNavigateForgot} underlayColor="#ddd">
                                <DefaultText bolder="bold" color="#000">Forgot password</DefaultText>
                            </ModalBtn>
                            <ModalBtn onPress={ModalNavigateRedefine} underlayColor="#ddd">
                                <DefaultText bolder="bold" color="#000">Reset password</DefaultText>
                            </ModalBtn>
                            <ModalBtn underlayColor="#ddd" onPress={() => setModalVisible(false)}>
                                <DefaultText deco="underline" color="#DF274C">Cancel</DefaultText>
                            </ModalBtn>
                        </ModalItemView>
                    </ModalView>
                </Modal>

                <BtnAbsolute onPress={() => console.log('Olá')}>
                    <DefaultText font="16px" bolder="bold" color="#DF274C">Help</DefaultText>
                </BtnAbsolute>

                <Header>
                    <UserImg source={img} />
                    <DefaultText font="20px" bolder="bold">@matheus.gomes1039</DefaultText>
                    <DefaultText font="16px" color="#aaa">Matheus Gomes</DefaultText>

                    <TextBtn onPress={() => console.log('olá')}>
                        <DefaultText color="#DF274C">See my profile</DefaultText>
                    </TextBtn>

                    <TextAbsolute>My Account</TextAbsolute>
                </Header>

                <MainContent>
                    {arrayBtnBig.map((item, k) => (
                        <DefaultBtn underlayColor="#ddd" key={k} onPress={() => navigation.navigate(item.screen)}>
                            <>
                                <BtnText>{item.content}</BtnText>
                                <BtnSubText>{item.subContent}</BtnSubText>
                            </>
                        </DefaultBtn>
                    ))}

                    {arrayBtn.map((item, k) => (
                        <DefaultBtn underlayColor="#ddd" key={k} onPress={() => navigation.navigate(item.screen)} height="60px">
                            <BtnText>{item.content}</BtnText>
                        </DefaultBtn>
                    ))}

                    <DefaultBlock>
                        <BlockText>
                            <DefaultText bolder="bold" color="#DF274C">Promotions</DefaultText>
                        </BlockText>
                        <DefaultBtn underlayColor="#ddd" onPress={() => console.log('olá')} height="60px">
                            <DefaultText bolder="bold">Use promotional code</DefaultText>
                        </DefaultBtn>
                    </DefaultBlock>

                    <DefaultBlock>
                        <BlockText>
                            <DefaultText bolder="bold" color="#DF274C">To my business</DefaultText>
                        </BlockText>
                        <DefaultBtn underlayColor="#ddd" onPress={() => console.log('olá')} height="60px">
                            <DefaultText bolder="bold">Bankidô PRO</DefaultText>
                        </DefaultBtn>
                    </DefaultBlock>

                    <DefaultBlock>
                        <BlockText>
                            <DefaultText bolder="bold" color="#DF274C">Configuration</DefaultText>
                        </BlockText>
                        <DefaultBtn underlayColor="#ddd" onPress={() => navigation.navigate('notification_alert')} height="60px">
                            <DefaultText bolder="bold">Notifications</DefaultText>
                        </DefaultBtn>
                        <DefaultBtn underlayColor="#ddd" onPress={() => setModalVisible(true)} height="60px">
                            <DefaultText bolder="bold">Password update</DefaultText>
                        </DefaultBtn>
                    </DefaultBlock>

                    <DefaultBlock>
                        <BlockText>
                            <DefaultText bolder="bold" color="#DF274C">General</DefaultText>
                        </BlockText>
                        <DefaultBtn underlayColor="#ddd" onPress={() => console.log('olá')} height="60px">
                            <DefaultText bolder="bold">About Bankidô</DefaultText>
                        </DefaultBtn>
                        <DefaultBtn underlayColor="#ddd" onPress={() => console.log('olá')} height="60px">
                            <DefaultText bolder="bold">Need help?</DefaultText>
                        </DefaultBtn>
                    </DefaultBlock>

                    <DefaultBtn mTop="25px" underlayColor="#ddd" onPress={() => console.log('olá')} height="60px">
                        <DefaultText bolder="bold" color="red" font="16px">Log out</DefaultText>
                    </DefaultBtn>

                </MainContent>

            </Scroll>
        </Container>
    );
}