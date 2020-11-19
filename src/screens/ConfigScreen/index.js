import React from 'react';
import img from '../../assets/img/895719.png';

import { StatusBar } from 'react-native';

import {
    Container,

    Scroll,

    DefaultText,
    BtnAbsolute,
    TextAbsolute,

    Header,
    UserImg,
    TextBtn,

    MainContent,
    DefaultBtn,
    BtnText,
    BtnSubText,
} from './styled';

let arrayBtn = [
    { id: '1', content: 'Conta Bancária', screen: 'bank_account' },
    { id: '2', content: 'Taxas e limites', screen: 'taxa' },
    { id: '3', content: 'Meus Endereços', screen: 'adress' },
    { id: '4', content: 'Meus favoritos', screen: 'favorite' },
    { id: '5', content: 'Validar Identidade', screen: 'id_validation' },
    { id: '6', content: 'Atualizar cadastro', screen: 'att_register' },
    { id: '7', content: 'Meu PIX', screen: 'pix' },
];

let arrayBtnBig = [
    { id: '1', content: 'Meu PicPay', subContent: '@matheus.gomes1039', screen: 'picpay' },
    { id: '2', content: 'Meu número', subContent: '(**) *****-4687', screen: 'number' },
    { id: '3', content: 'Meu E-mail', subContent: 'm*************2@h*****l.com', screen: 'email' },
    { id: '4', content: 'Dados pessoais', subContent: 'Nome, CPF e data de nascimento', screen: 'user_data' },
];

export default () => {
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#eee" />

            <Scroll>
                <BtnAbsolute onPress={() => console.log('Olá')}>
                    <DefaultText font="16px" bolder="bold" color="#36B477">Ajuda</DefaultText>
                </BtnAbsolute>

                <Header>
                    <UserImg source={img} />
                    <DefaultText font="20px" bolder="bold">@matheus.gomes1039</DefaultText>
                    <DefaultText font="16px" color="#aaa">Matheus Gomes</DefaultText>

                    <TextBtn onPress={() => console.log('olá')}>
                        <DefaultText color="#36B477">Ver meu perfil</DefaultText>
                    </TextBtn>

                    <TextAbsolute>Minha conta</TextAbsolute>
                </Header>

                <MainContent>
                    {arrayBtnBig.map((item, k) => (
                        <DefaultBtn underlayColor="#ddd" key={k} onPress={() => console.log(item.screen)}>
                            <>
                                <BtnText>{item.content}</BtnText>
                                <BtnSubText>{item.subContent}</BtnSubText>
                            </>
                        </DefaultBtn>
                    ))}

                    {arrayBtn.map((item, k) => (
                        <DefaultBtn underlayColor="#ddd" key={k} onPress={() => console.log(item.screen)} height="50px">
                            <BtnText>{item.content}</BtnText>
                        </DefaultBtn>
                    ))}


                </MainContent>

            </Scroll>
        </Container>
    );
}