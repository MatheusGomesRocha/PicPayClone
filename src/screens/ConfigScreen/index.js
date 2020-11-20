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

    DefaultBlock,
    BlockText,
} from './styled';

let arrayBtnBig = [
    { id: '1', content: 'Bankidô', subContent: '@matheus.gomes1039', screen: 'bankido' },
    { id: '2', content: 'Personal data', subContent: 'Nome, CPF e data de nascimento', screen: 'user_data' },
    { id: '3', content: 'E-mail', subContent: 'm*************2@hotmail.com', screen: 'email' },
    { id: '4', content: 'Contact number', subContent: '(85) ***45-**87', screen: 'number' },
];

let arrayBtn = [
    { id: '1', content: 'Bank Account', screen: 'bank_account' },
    { id: '2', content: 'Id validation', screen: 'id_validation' },
    { id: '3', content: 'My addresses', screen: 'adress' },
    { id: '4', content: 'Favorites', screen: 'favorite' },
    { id: '5', content: 'PIX', screen: 'pix' },
];

export default () => {
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#eee" />

            <Scroll>
                <BtnAbsolute onPress={() => console.log('Olá')}>
                    <DefaultText font="16px" bolder="bold" color="#1fa1c7">Ajuda</DefaultText>
                </BtnAbsolute>

                <Header>
                    <UserImg source={img} />
                    <DefaultText font="20px" bolder="bold">@matheus.gomes1039</DefaultText>
                    <DefaultText font="16px" color="#aaa">Matheus Gomes</DefaultText>

                    <TextBtn onPress={() => console.log('olá')}>
                        <DefaultText color="#1fa1c7">Ver meu perfil</DefaultText>
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

                    <DefaultBlock>
                        <BlockText>
                            <DefaultText bolder="bold" color="#1fa1c7">Promotions</DefaultText>
                        </BlockText>
                        <DefaultBtn underlayColor="#ddd" onPress={() => console.log('olá')} height="50px">
                            <DefaultText bolder="bold">Use promotional code</DefaultText>
                        </DefaultBtn>
                    </DefaultBlock>

                    <DefaultBlock>
                        <BlockText>
                            <DefaultText bolder="bold" color="#1fa1c7">To my business</DefaultText>
                        </BlockText>
                        <DefaultBtn underlayColor="#ddd" onPress={() => console.log('olá')} height="50px">
                            <DefaultText bolder="bold">Bankidô PRO</DefaultText>
                        </DefaultBtn>
                    </DefaultBlock>


                </MainContent>

            </Scroll>
        </Container>
    );
}