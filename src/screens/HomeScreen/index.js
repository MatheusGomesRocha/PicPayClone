import React from 'react';
import Qr from '../../assets/svg/qr.svg';
import Gift from '../../assets/svg/gift.svg';
import Cupom from '../../assets/svg/cupom.svg';
import Search from '../../assets/svg/search.svg';

import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    Scroll,


    Header,
    LeftHeader,
    CenterHeader,
    RightHeader,

    BtnInput,
} from './styled';

export default () => {
    return (
        <Container>
            <Scroll>
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
            </Scroll>
        </Container>
    );
}