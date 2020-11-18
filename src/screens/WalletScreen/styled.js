import styled from 'styled-components/native';
import { primary } from '../../DefaultStyle';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    background-color: ${primary};
    align-items: center;
    justify-content: center;
    height: 260px;
`;
export const TextBlock = styled.View`
    align-items: center;
`;
export const DefaultText = styled.Text`
    color: ${props => props.color || '#eee'};
    font-size: ${props => props.font || '14px'};
    margin-top: ${props=>props.mTop || '7px'}
`;
export const BtnBlock = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
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
`;