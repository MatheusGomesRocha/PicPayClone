import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
`;

export const Flat = styled.FlatList``;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #eee;
    height: 57px;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const BtnConfig = styled.TouchableOpacity``;

export const ArrayItem = styled.TouchableHighlight`
    padding: 10px;
    min-height: 90px;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const DefaultText = styled.Text`
    color: ${props=>props.color || '#444'};
    font-size: ${props=>props.font || '14px'};
    margin-top: ${props=>props.mTop || '0'};
    font-weight: ${props=>props.bolder || 'normal'};
`;
