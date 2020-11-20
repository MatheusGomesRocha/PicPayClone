import React from 'react';

import { StatusBar } from 'react-native';

import {
    Container,

    Flat,

    Header,
    BtnConfig,

    ArrayItem,
    DefaultText,
} from './styled';

let array = [
    { id: '1', content: 'Quer ganhar prêmios em dinheiro? Com Unilever + PicPay dá! Vem saber mais.', date: 'Ontem às 19:05' },
    { id: '2', content: 'Quer ganhar prêmios em dinheiro? Com Unilever + PicPay dá! Vem saber mais. Quer ganhar prêmios em dinheiro? Com Unilever + PicPay dá! Vem saber mais.', date: 'Ontem às 19:05' },
    { id: '3', content: 'Quer ganhar prêmios em dinheiro? Com Unilever + PicPay dá! Vem saber mais.', date: 'Ontem às 19:05' },
    { id: '4', content: 'Quer ganhar prêmios em dinheiro? Com Unilever + dá! Vem saber mais. Quer ganhar prêmios em dinheiro? Com Unilever + PicPay dá! Vem saber mais. Quer ganhar prêmios em dinheiro? Com Unilever + PicPay dá! Vem saber mais.', date: 'Ontem às 19:05' },
    { id: '5', content: 'Quer ganhar prêmios em dinheiro? Com Unilever + PicPay dá! Vem saber mais.', date: 'Ontem às 19:05' },
]
export default () => {

    const ArrayNotification = ({ data }) => {
        return (
            <ArrayItem underlayColor="#ddd" onPress={() => console.log('Olá')}>
                <>
                    <DefaultText>{data.content}</DefaultText>
                    <DefaultText mTop="10px" color="#aaa">{data.date}</DefaultText>
                </>
            </ArrayItem>
        );
    }
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#eee" />

            <Flat
                ListHeaderComponent={
                    <>
                        <Header>
                            <DefaultText bolder="bold" font="18px">Notificações</DefaultText>
                            <BtnConfig onPress={() => console.log('Olá')}>
                                <DefaultText bolder="bold" color="#1fa1c7">Configurar</DefaultText>
                            </BtnConfig>
                        </Header>
                    </>
                }
                data={array}
                renderItem={({ item }) => <ArrayNotification data={item} />}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
}