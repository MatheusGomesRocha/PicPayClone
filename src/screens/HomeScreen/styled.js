import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 0 15px;
`;

export const Scroll = styled.ScrollView``;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 55px;
`;
export const LeftHeader = styled.View`
    width: 35%;
`;
export const CenterHeader = styled.View`
    width: 30%;
    align-items: center;
`;
export const RightHeader = styled.View`
    flex-direction: row;
    width: 35%;
    justify-content: flex-end;
`;

export const BtnInput = styled.TouchableHighlight`
    height: 50px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 25px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
`;
