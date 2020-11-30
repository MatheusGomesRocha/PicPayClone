import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
    align-items: center;
`;

export const DivInput = styled.View`
    flex-direction: row;
    margin: 15px 0;
    align-items: center;
    borderBottomWidth: 1px;
    borderBottomColor: #aaa;
`;
export const Input = styled.TextInput`
    font-size: 18px;
    flex: 1;
`;

export const BtnHeader = styled.TouchableHighlight`
    margin-top: 30px;
    background-color: #1fa1c7;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;
