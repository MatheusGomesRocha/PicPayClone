import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;

export const AccountView = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
`;
export const LeftView = styled.View``;
export const Img = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
`;
export const CenterView = styled.View`
    margin-left: 15px;
`;

export const DefaultBtn = styled.TouchableHighlight`
    background-color: ${props=>props.bgColor || 'transparent'};
    border: ${props=>props.border || 'none'};
    margin-top: 15px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
`;
