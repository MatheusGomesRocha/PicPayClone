import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;

export const BtnHeader = styled.TouchableOpacity`
    padding-right: 20px;
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