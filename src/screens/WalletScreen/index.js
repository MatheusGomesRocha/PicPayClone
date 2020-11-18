import React from 'react';

import {
    Container,

    Header,
    TextBlock,
    DefaultText,
    BtnBlock,
    DefaultBtn,
} from './styled';

export default () => {
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
        </Container>
    );
}