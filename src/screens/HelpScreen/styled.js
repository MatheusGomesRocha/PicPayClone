import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;

export const DivInput = styled.View`
    height: 50px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 25px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    margin-top: 20px;
`;
export const Input = styled.TextInput`
    flex: 1;
`;