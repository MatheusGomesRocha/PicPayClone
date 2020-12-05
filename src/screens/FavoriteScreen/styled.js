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