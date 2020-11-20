import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    height: 260px;
`;
export const BtnBlock = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const DefaultBtn = styled.TouchableHighlight`
    background-color: transparent;
    width: 45%;
    height: 50px;
    border-radius: 35px;
    border: 2px solid #fff;
    align-items: center;
    justify-content: center;
    margin: 0 7px;
    flex-direction: row;
`;

export const TextBlock = styled.View`
    align-items: center;
    margin-top: 35px;
`;


export const SubHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: 60px;
    padding: 0 10px;
    borderBottomColor: #ccc;
    borderBottomWidth: 1px; 
`;

export const MainContent = styled.View`
    margin: 0 5%;
`;
export const CardView = styled.View`
    height: ${props=>props.height};
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    border-radius: 5px;
    margin-top: ${props=>props.mTop};
`;
export const LeftView = styled.View`
    flex-direction: row;
`;
export const LeftBlock = styled.View`
    padding-left: 10px;
`;


export const CupomBtn = styled.TouchableHighlight`
    flex-direction: row;
    margin-top: 25px;
    justify-content: center;
`;