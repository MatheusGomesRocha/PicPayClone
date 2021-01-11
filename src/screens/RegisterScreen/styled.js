import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 5%;
`;

export const Scroll = styled.ScrollView``;

export const MainView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`;
export const TopView = styled.View`
    align-items: center;
    margin-bottom: 20px;
`;
export const InputView = styled.View`
    height: 55px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    margin-top: 20px;
`;
export const LineDiv = styled.View`
    padding: 0 15px 0 0;
    borderRightWidth: 1px;
    borderRightColor: #aaa;
`;
export const Input = styled.TextInput`
    flex: 1;
    padding-left: 10px;
    font-size: 16px;
`;
export const BottomView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    
`;
export const TextBtn = styled.TouchableOpacity`
    margin-top: 20px;
`;