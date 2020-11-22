import React from 'react';
import Qr from '../../assets/svg/qr.svg';
import Gift from '../../assets/svg/gift.svg';
import Cupom from '../../assets/svg/cupom.svg';
import Search from '../../assets/svg/search.svg';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StatusBar } from 'react-native';

import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    Scroll,


    Header,
    LeftHeader,
    CenterHeader,
    RightHeader,

    BtnInput,

    MainContent,
    ActivityBlock,
    ActivityTop,
    ActivityIcon,
    ActivityContent,
    ActivityBottom,
} from './styled';

const TopTab = createMaterialTopTabNavigator();

const array = [
    { id: '1', type: 'Pagamento de Boleto', status: 'Realizado', price: '31,48', date: '20/11/2020' },
    { id: '2', type: 'Pagamento de Boleto', status: 'Realizado', price: '31,48', date: '20/11/2020' },
    { id: '3', type: 'Pagamento de Boleto', status: 'Realizado', price: '31,48', date: '20/11/2020' },
    { id: '4', type: 'Pagamento de Boleto', status: 'Realizado', price: '31,48', date: '20/11/2020' },
    { id: '5', type: 'Pagamento de Boleto', status: 'Realizado', price: '31,48', date: '20/11/2020' },
]

export default () => {
    const History = () => {
        return (
            <MainContent>
                {array.map((item, k) => (
                    <ActivityBlock key={k}>
                        <ActivityTop>

                            <ActivityIcon>
                                <Qr fill="#1fa1c7" width="20px" height="20px" />
                            </ActivityIcon>
                            <ActivityContent>
                                <DefaultText font="16px">{item.type}</DefaultText>
                                <DefaultText>{item.status}</DefaultText>
                            </ActivityContent>

                        </ActivityTop>

                        <ActivityBottom>
                            <DefaultText color="#1fa1c7">R$ {item.price}</DefaultText>
                            <DefaultText mLeft="10px">{item.date}</DefaultText>
                        </ActivityBottom>
                    </ActivityBlock>
                ))}

            </MainContent>
        );
    }

    const All = () => {
        // CONTEÚDO DE TODOS, INCLUINDO PESSOAS QUE SIGO
        return (
            <History />
        );
    }

    const My = () => {
        // CONTEÚDO APENAS MEU
        return (
            <History />
        );
    }
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            
            <Scroll showsVerticalScrollIndicator={false}>
                <Header>
                    <LeftHeader>
                        <Qr width="25px" height="25px" fill="#1fa1c7" />
                    </LeftHeader>

                    <CenterHeader>
                        <DefaultText font="12px">My balance</DefaultText>
                        <DefaultText font="16px" bolder="bold">R$ 1,01</DefaultText>
                    </CenterHeader>

                    <RightHeader>
                        <Gift style={{ marginRight: 20 }} width="25px" height="25px" fill="#1fa1c7" />
                        <Cupom width="25px" height="25px" fill="#1fa1c7" />
                    </RightHeader>
                </Header>

                <BtnInput underlayColor="transparent" onPress={() => console.log('Go to search')}>
                    <>
                        <Search style={{ marginRight: 10 }} width="25px" height="25px" fill="#1fa1c7" />
                        <DefaultText color="#aaa">What do you want to pay?</DefaultText>
                    </>
                </BtnInput>

                <TopTab.Navigator
                    tabBarOptions={{
                        style: { height: 60, marginLeft: 220, justifyContent: 'flex-end', elevation: 0, backgroundColor: 'transparent' },
                        labelStyle: { fontSize: 16, textTransform: null },
                        activeTintColor: '#1fa1c7',
                        inactiveTintColor: '#ccc',
                        tabStyle: { width: 80 },
                        indicatorStyle: { backgroundColor: '#1fa1c7', height: 3 },
                    }}
                >
                    <TopTab.Screen name="current" component={All} options={{ tabBarLabel: 'All' }} />
                    <TopTab.Screen name="finish" component={My} options={{ tabBarLabel: 'My' }} />
                </TopTab.Navigator>


            </Scroll>
        </Container>
    );
}