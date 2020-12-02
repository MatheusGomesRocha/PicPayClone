import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
    align-items: center;
`;

export const DivInput = styled.View`
    borderBottomWidth: 1px;
    borderBottomColor: #aaa;
    width: 100%;
    margin-top: 20px;
`;
export const Input = styled.TextInput`
    font-size: 16px;
`;


export const DefaultBtn = styled.TouchableHighlight`
    margin-top: 30px;
    background-color: #1fa1c7;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;
