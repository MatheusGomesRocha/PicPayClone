import React, {useState} from 'react';

import {Switch} from 'react-native';

import {
    Container,

    DefaultText,

    Header,
    TextBlock,
    BtnBlock,
    DefaultBtn,

    SubHeader,
} from './styled';

export default () => {
    const [payWithAccount, setPayWithAccount] = useState(false);

    return (
        <Container>
            <Header>
                <TextBlock>
                    <DefaultText mTop="-10px" color="#fff">Saldo PicPay</DefaultText>
                    <DefaultText font="35px" color="#fff">R$ 32,48</DefaultText>
                    <DefaultText>Seu saldo rende 210% de CDI</DefaultText>
                </TextBlock>

                <BtnBlock>
                    <DefaultBtn>
                        <DefaultText color="#fff" mTop="0">Adicionar</DefaultText>
                    </DefaultBtn>

                    <DefaultBtn>
                        <DefaultText color="#fff" mTop="0">Retirar</DefaultText>
                    </DefaultBtn>
                </BtnBlock>
            </Header>

            <SubHeader>
                <DefaultText font="16px" mTop="0px" color="#000">Usar saldo a pagar</DefaultText>
                <Switch trackColor={payWithAccount ? '#00AC4A' : '#ccc'} thumbColor={payWithAccount ? '#00AC4A' : '#ccc'} value={payWithAccount} onChange={() => setPayWithAccount(!payWithAccount)} />
            </SubHeader>
        </Container>
    );
}