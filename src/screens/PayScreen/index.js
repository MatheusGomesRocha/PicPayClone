import React from 'react';
import Qr from '../../assets/svg/qr.svg';
import UserCircle from '../../assets/svg/user_circle.svg';
import BarScan from '../../assets/svg/bar_scan.svg';
import ChargeMoney from '../../assets/svg/charge_money.svg';
import Store from '../../assets/svg/store.svg';
import Pin from '../../assets/svg/pin.svg';
import Phone from '../../assets/svg/smartphone.svg';
import Bus from '../../assets/svg/bus.svg';

import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    Header,

    MainContent,
    Scroll,
    RowItem,
    SmallItem,

    ColumnItem,
    BigItem,
    BigItemIcon,
    BigItemContent,
} from './styled';

let bigItem = [
    { id: '1', text: 'Places close to you', subText: 'Take a look at witch establishments are nearby', Icon: Pin },
    { id: '2', text: 'Store', subText: 'Buy anything without leaving home', Icon: Store },
];

let smallItem = [
    { id: '1', text: 'Pay bills', Icon: BarScan },
    { id: '2', text: 'Pay someone', Icon: UserCircle },
    { id: '3', text: 'Charge someone', Icon: ChargeMoney },
    { id: '4', text: 'Smartphone recharge', Icon: Phone },
    { id: '5', text: 'Bus pass', Icon: Bus, margin: false },
];



export default () => {
    return (
        <Container>
            <Header>
                <Qr width="25px" height="25px" fill="#1fa1c7" />
                <DefaultText mLeft="15px" bolder="bold" font="20px">Transactions</DefaultText>
            </Header>

            <MainContent>

                <ColumnItem>
                    {bigItem.map((item, k) => (
                        <BigItem key={k} onPress={() => console.log('olá mundo')} underlayColor="#ddd" >
                            <>
                                <BigItemIcon>
                                    <item.Icon width="20px" height="20px" fill="#1fa1c7" />
                                </BigItemIcon>
                                <BigItemContent>
                                    <DefaultText bolder="bold" font="16px">{item.text}</DefaultText>
                                    <DefaultText>{item.subText}</DefaultText>
                                </BigItemContent>
                            </>
                        </BigItem>
                    ))}
                </ColumnItem>

                <Scroll decelerationRate="fast" showsHorizontalScrollIndicator={false} horizontal={true}>
                    <RowItem>
                        {smallItem.map((item, k) => (
                            <SmallItem mRight={item.margin == false ? '0' : '10px'} key={k} onPress={() => console.log('olá mundo')} underlayColor="#ddd" >
                                <>
                                    <item.Icon width="20px" height="20px" fill="#1fa1c7" />
                                    <DefaultText>{item.text}</DefaultText>
                                </>
                            </SmallItem>
                        ))}
                    </RowItem>
                </Scroll>




            </MainContent>
        </Container>
    );
}