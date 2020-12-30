import React from 'react';

import { DefaultText } from '../../components/DefaultText';

import {
    Container,
    
    Flat,

    ArrayItem,
} from './styled';

let array = [
    { id: 1, title: 'PIX', content: 'How PIX works?' },
    { id: 2, title: 'PIX', content: 'How PIX works?' },
    { id: 3, title: 'PIX', content: 'How PIX works?' },
    { id: 4, title: 'PIX', content: 'How PIX works?' },
    { id: 5, title: 'PIX', content: 'How PIX works?' },
    { id: 6, title: 'PIX', content: 'How PIX works?' },
    { id: 7, title: 'PIX', content: 'How PIX works?' },
    { id: 8, title: 'PIX', content: 'How PIX works?' },
    { id: 9, title: 'PIX', content: 'How PIX works?' },
    { id: 10, title: 'PIX', content: 'How PIX works?' },
];

export default () => {
    const ArrayContent = ({ data }) => {
        return (
            <ArrayItem>
                <DefaultText>{data.content}</DefaultText>
            </ArrayItem>
        );
    }
    return (
        <Container>
            <Flat
                showsVerticalScrollIndicator={false}
                data={array}
                renderItem={({ item }) => <ArrayContent data={item} />}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
}