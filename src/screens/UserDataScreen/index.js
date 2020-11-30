import React from 'react';

import { DefaultText } from '../../components/DefaultText';

import { StatusBar } from 'react-native';

import {
    Container
} from './styled';

export default () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#1fa1c7" />

            <DefaultText>User Data</DefaultText>
        </Container>
    )
}