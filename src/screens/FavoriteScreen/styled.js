import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;

export const ItemView = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 20px;
    borderBottomWidth: 1px;
    borderBottomColor: #aaa;
`;
export const LeftView = styled.View`
    
`;
export const Img = styled.Image`
    height: 70px;
    width: 70px;
    border-radius: 35px;
`;
export const CenterView = styled.View`
    margin-left: 15px;
`;


export const FavoriteBtn = styled.TouchableHighlight`
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
    background-color: #eee;
    padding: 10px;
    border-radius: 5px;
`;
export const BtnCircle = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 35px;
    background-color: #1fa1c7;
    align-items: center;
    justify-content: center;
`;