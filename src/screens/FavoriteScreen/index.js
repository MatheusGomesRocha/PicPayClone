import React from 'react';
import ImgT from '../../assets/img/895719.png';
import { DefaultText } from '../../components/DefaultText';

import { StatusBar } from 'react-native';

import {
    Container,

    ItemView,
    LeftView,
    Img,
    CenterView,
} from './styled';

let array = [
    {id: 1, user: '@teste19478', name: 'Matheus'},
    {id: 2, user: '@teste19478', name: 'Pedro'},
    {id: 3, user: '@teste19478', name: 'Junior'},
];

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#1fa1c7" />

            {array.map((item, k) => (
                <ItemView key={k}>
                    <LeftView>
                        <Img source={ImgT} />
                    </LeftView>
                    <CenterView>
                        <DefaultText>{item.user}</DefaultText>
                        <DefaultText color="#aaa">{item.name}</DefaultText>
                    </CenterView>
                </ItemView>
            ))}
        </Container>
    );
}