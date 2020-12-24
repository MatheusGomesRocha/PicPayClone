import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;


export const DivInput = styled.View`
    borderBottomWidth: 1px;
    borderBottomColor: #ccc;
    height: 50px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
`;
export const LineDiv = styled.View`
    padding: 0 15px 0 10px;
    borderRightWidth: 1px;
    borderRightColor: #aaa;
`;
export const Input = styled.TextInput`
    flex: 1;
    padding-left: 15px;
`;
export const BtnEye = styled.TouchableOpacity``;

export const DefaultBtn = styled.TouchableHighlight`
    background-color: #1fa1c7;
    margin-top: 30px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;