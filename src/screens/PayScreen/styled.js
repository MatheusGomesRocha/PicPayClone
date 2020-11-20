import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Header = styled.View`
    flex-direction: row;
    padding-left: 15px;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    height: 55px;
    align-items: center;
`;

export const MainContent = styled.View`
    margin: 0 15px;
`;
export const Scroll = styled.ScrollView``;
export const RowItem = styled.View`
    flex-direction: row;
    margin: 25px 0;
`;
export const SmallItem = styled.TouchableHighlight`
    width: 110px;
    height: 87px;
    border-radius: 10px;
    border: 1px solid #ddd;
    justify-content: space-around;
    padding: 0 10px;
    margin-right: ${props=>props.mRight};
`;


export const ColumnItem = styled.View`
    margin-top: 25px;
`;
export const BigItem = styled.TouchableHighlight`
    height: 75px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    flex-direction: row;
    margin-top: 10px;
`;
export const BigItemIcon = styled.View`
    width: 50px;
    align-items: center;
    justify-content: center;
`;
export const BigItemContent = styled.View`
    flex: 1;
    justify-content: center;
`;
