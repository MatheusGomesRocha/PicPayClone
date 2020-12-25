import React, { useState } from 'react';
import CardIcon from '../../assets/svg/mastercard.svg';
import PlusCircleIcon from '../../assets/svg/plus_circle.svg';
import CupomIcon from '../../assets/svg/cupom.svg';
import PhoneIcon from '../../assets/svg/phone.svg';
import BankIcon from '../../assets/svg/bank.svg';

import { DefaultText } from '../../components/DefaultText';

import { Switch, StatusBar, Animated } from 'react-native';

import {
    Container,

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
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [payWithAccount, setPayWithAccount] = useState(false);


    const handleAnimation = () => {
        if (payWithAccount == false) {
            Animated.timing(animation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start()
            setPayWithAccount(true);
        } else if (payWithAccount) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start()
            setPayWithAccount(false);
        }

    }

    const boxInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#aaa", "#E54F6D"]
    })

    return (
        <Container>

            <StatusBar barStyle="light-content" backgroundColor={payWithAccount ? '#E54F6D' : '#aaa'} />

            <Animated.View style={{ backgroundColor: boxInterpolation }}>
                <Header>
                    <BtnBlock>
                        <DefaultBtn underlayColor="#ccc" onPress={() => console.log('add')}>
                            <>
                                <PhoneIcon width="20px" height="20px" fill="#fff" />
                                <DefaultText mLeft="10px" color="#fff">Add cash</DefaultText>
                            </>
                        </DefaultBtn>

                        <DefaultBtn underlayColor="#ccc" onPress={() => console.log('Retirar')}>
                            <>
                                <BankIcon width="20px" height="20px" fill="#fff" />
                                <DefaultText mLeft="10px" color="#fff">Withdraw</DefaultText>
                            </>
                        </DefaultBtn>
                    </BtnBlock>

                    <TextBlock>
                        <DefaultText mTop="-10px" color="#fff">Balance Bankidô</DefaultText>
                        <DefaultText mTop="7px" font="32px" bolder="bold" color="#fff">R$ 32,48</DefaultText>
                    </TextBlock>
                </Header>
            </Animated.View >

            <SubHeader>
                <DefaultText font="16px" mTop="0px" color="#000">Use balance to pay</DefaultText>
                <Switch thumbColor={payWithAccount ? '#E54F6D' : '#eee'} value={payWithAccount} onChange={handleAnimation} />
            </SubHeader>

            <MainContent>
                <DefaultText color="#999" mTop="20px">Payments methods</DefaultText>

                <CardView mTop="10px" height="60px">
                    <LeftView>
                        <CardIcon width="45px" height="45px" />
                        <LeftBlock>
                            <DefaultText color="#000" font="18px">Master</DefaultText>
                            <DefaultText color='#aaa' font="12px">Card with end 3759</DefaultText>
                        </LeftBlock>
                    </LeftView>
                </CardView>

                <CardView mTop="5px" height="70px">
                    <PlusCircleIcon width="30px" height="30px" fill="#DF274C" />
                    <DefaultText mLeft="10px" color="#DF274C" font="16px">Add credit card</DefaultText>
                </CardView>

                <CupomBtn underlayColor="transparent" onPress={() => console.log('olá mundo')}>
                    <>
                        <CupomIcon width="25px" height="25px" fill="#DF274C" />
                        <DefaultText deco="underline" mLeft="10px" font="18px" color="#DF274C">Use promotional code</DefaultText>
                    </>
                </CupomBtn>
            </MainContent>
        </Container>
    );
}