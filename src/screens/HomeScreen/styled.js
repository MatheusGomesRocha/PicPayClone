import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 0 15px;
    background-color: #fff;
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


export const MainContent = styled.View`
    background-color: #fff;
`;
export const ActivityBlock = styled.View`
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 120px;
    margin-top: 15px;
    justify-content: space-around;
`;
export const ActivityTop = styled.View`
    flex-direction: row;
`;
export const ActivityIcon = styled.View`
    width: 50px;
    align-items: center;
    justify-content: center;
`;
export const ActivityContent = styled.View`
    flex: 1;
    justify-content: center;
`;
export const ActivityBottom = styled.View`
    flex-direction: row;
    padding-left: 20px;
`;
