import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;

export const Scroll = styled.ScrollView``;

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
    padding-left: 10px;
    font-size: 16px;
`;

export const ArrayDiv = styled.View`
    margin-top: ${props=>props.mTop || '0'};
`;
export const ArrayBtn = styled.TouchableHighlight`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 0;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
    height: 55px;
`;