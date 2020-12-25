import React from 'react';
import ImgT from '../../assets/img/895719.png';
import Star from '../../assets/svg/star.svg';

import { DefaultText } from '../../components/DefaultText';

import { StatusBar } from 'react-native';

import {
    Container,

    ItemView,
    LeftView,
    Img,
    CenterView,

    FavoriteBtn,
    BtnCircle,
} from './styled';

let array = [
    { id: 1, user: '@teste19478', name: 'Matheus' },
    { id: 2, user: '@teste19478', name: 'Pedro' },
    { id: 3, user: '@teste19478', name: 'Junior' },
];

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#DF274C" />

            {array.map((item, k) => (
                <ItemView key={k}>
                    <LeftView>
                        <Img source={ImgT} />
                    </LeftView>
                    <CenterView>
                        <DefaultText font="16px" bolder="bold">{item.user}</DefaultText>
                        <DefaultText color="#aaa">{item.name}</DefaultText>
                    </CenterView>
                </ItemView>
            ))}

            <FavoriteBtn onPress={() => console.log('olá mundo')} underlayColor="#ddd"> 
                <>
                    <BtnCircle>
                        <Star width="30px" height="30px" fill="#fff" />

                    </BtnCircle>
                    <DefaultText mLeft="15px" bolder="bold" font="18px">Add to Favorites</DefaultText>
                </>
            </FavoriteBtn>
        </Container>
    );
}