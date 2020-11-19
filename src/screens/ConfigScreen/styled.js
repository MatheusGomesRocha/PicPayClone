import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const DefaultText = styled.Text`
    color: ${props=>props.color || '#000'};
    font-size: ${props=>props.font || '14px'};
    font-weight: ${props=>props.bolder || 'normal'};
`;

export const BtnAbsolute = styled.TouchableOpacity`
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 999;
`;

export const TextAbsolute = styled.Text`
    color: #00AC4A;
    position: absolute;
    bottom: 5px;
    left: 15px;
`;

export const Header = styled.View`
    height: 290px;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const UserImg = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-bottom: 10px;
`;
export const TextBtn = styled.TouchableOpacity``;


export const MainContent = styled.View``;
export const DefaultBtn = styled.TouchableHighlight`
    height: ${props=>props.height || '67px'};
    padding: 0 15px;
    justify-content: center;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`;
export const BtnText = styled.Text`
    font-weight: bold;
`;
export const BtnSubText = styled.Text`
    color: #777;
`;