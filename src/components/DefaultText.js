import styled from 'styled-components/native';

export const DefaultText = styled.Text`
    font-size: ${props => props.font || '14px'};
    font-weight: ${props => props.bolder || 'normal'};
    color: ${props => props.color || '#000'};
    margin-left: ${props => props.mLeft || '0'};
    margin-top: ${props => props.mTop || '0'};
    text-decoration: ${props=>props.deco || 'none'};
`;
