import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const PreloadView = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.ImageBackground`
    flex: 1;
`;

export const MainView = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
    align-items: center;
    padding: 0 5% 100px 5%;
`;

export const DefaultBtn = styled.TouchableHighlight`
    width: 100%;
    height: 50px;
    border: ${props=>props.border || '1px solid #fff'};
    border-radius: 25px;
    background-color: ${props => props.bg || 'transparent'};
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;