import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
    align-items: center;
`;

export const DivInput = styled.View`
    borderBottomWidth: 1px;
    borderBottomColor: ${props=>props.bbc};
    width: 100%;
    margin-top: 20px;
`;
export const Input = styled.TextInput`
    font-size: 16px;
`;
