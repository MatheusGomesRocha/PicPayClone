import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;
export const Scroll = styled.ScrollView``;

export const Input = styled.TextInput`
    width: ${props=>props.width || '100%'};
    borderBottomColor: #000;
    borderBottomWidth: 1px;
    margin-top: ${props=>props.mTop || '20px'};
    margin-bottom: ${props=>props.mBottom || '0'};
    font-size: 16px;
`;
export const DivInputRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const DefaultView = styled.View`
    width: 100%;
    min-height: 60px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 15px;
    margin-top: 25px;
`;
export const DefaultViewRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
`;
export const SquareBtn = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border: 2px solid #bbb;
    justify-content: center;
    align-items: center;
`;
export const DefaultBtn = styled.TouchableHighlight`
    width: 100%;
    height: 55px;
    border-radius: 30px;
    margin-top: 25px;
    background-color: #DF274C;
    align-items: center;
    justify-content: center;
`;