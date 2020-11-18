import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CardIcon from '../../assets/svg/mastercard.svg';
import PlusCircleIcon from '../../assets/svg/plus_circle.svg';
import CupomIcon from '../../assets/svg/cupom.svg';
import PhoneIcon from '../../assets/svg/phone.svg';
import BankIcon from '../../assets/svg/bank.svg';
import ChartIcon from '../../assets/svg/chart.svg';

import { Switch, StatusBar } from 'react-native';

import {
    Container,

    ChartBtn,

    DefaultText,

    Header,
    TextBlock,
    BtnBlock,
    DefaultBtn,

    SubHeader,

    MainContent,
    CardView,
    LeftView,
    LeftBlock,

    CupomBtn,
} from './styled';

export default () => {
    const [payWithAccount, setPayWithAccount] = useState(false);

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={payWithAccount ? '#1ca75e' : '#999'} />

            <ChartBtn>
                <ChartIcon width="15px" height="15px" />

            </ChartBtn>

            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={payWithAccount ? ['#4cdd7e', '#1ca75e'] : ['#ccc', '#858585']}>
                <Header>
                    <TextBlock>
                        <DefaultText mTop="-10px" color="#fff">Saldo PicPay</DefaultText>
                        <DefaultText mTop="7px" font="35px" color="#fff">R$ 32,48</DefaultText>
                        <DefaultText mTop="7px">Seu saldo rende 210% de CDI</DefaultText>
                    </TextBlock>

                    <BtnBlock>
                        <DefaultBtn underlayColor="#ccc" onPress={() => console.log('add')}>
                            <>
                                <PhoneIcon width="20px" height="20px" fill="#fff" />
                                <DefaultText mLeft="10px" color="#fff">Adicionar</DefaultText>
                            </>
                        </DefaultBtn>

                        <DefaultBtn underlayColor="#ccc" onPress={() => console.log('Retirar')}>
                            <>
                                <BankIcon width="20px" height="20px" fill="#fff" />
                                <DefaultText mLeft="10px" color="#fff">Retirar</DefaultText>
                            </>
                        </DefaultBtn>
                    </BtnBlock>
                </Header>
            </LinearGradient>

            <SubHeader>
                <DefaultText font="16px" mTop="0px" color="#000">Usar saldo a pagar</DefaultText>
                <Switch thumbColor={payWithAccount ? '#00AC4A' : '#eee'} value={payWithAccount} onChange={() => setPayWithAccount(!payWithAccount)} />
            </SubHeader>

            <MainContent>
                <DefaultText color="#999" mTop="20px">Formas de pagamento</DefaultText>

                <CardView mTop="10px" height="60px">
                    <LeftView>
                        <CardIcon width="45px" height="45px" />
                        <LeftBlock>
                            <DefaultText color="#000" font="18px">Master</DefaultText>
                            <DefaultText color='#aaa' font="12px">Cartão com final 3759</DefaultText>
                        </LeftBlock>
                    </LeftView>
                </CardView>

                <CardView mTop="5px" height="70px">
                    <PlusCircleIcon width="30px" height="30px" fill="#36B477" />
                    <DefaultText mLeft="10px" color="#36B477" font="16px">Adicionar cartão de crédito</DefaultText>
                </CardView>

                <CupomBtn underlayColor="transparent" onPress={() => console.log('olá mundo')}>
                    <>
                        <CupomIcon width="25px" height="25px" fill="#36B477" />
                        <DefaultText deco="underline" mLeft="10px" font="18px" color="#36B477">Usar código promocional</DefaultText>
                    </>
                </CupomBtn>
            </MainContent>
        </Container>
    );
}