import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 0 15px;
`;


export const ItemView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
    height: 50px;
`;