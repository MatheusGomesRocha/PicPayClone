import React from 'react';
import Search from '../../assets/svg/search.svg';

import { DefaultText } from '../../components/DefaultText';

import {
    Container,

    DivInput,
    Input,
} from './styled';

export default () => {
    return (
        <Container>
            <DivInput>
                <Search width="25px" height="25px" fill="#DF274C" />
                <Input placeholder="What's your question?" />
            </DivInput>
        </Container>
    );
}