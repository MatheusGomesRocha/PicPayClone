import styled from "styled-components/native";

export const DefaultBtn = styled.TouchableHighlight`
    margin-top: 30px;
    background-color: ${props=>props.bgColor};
    width: 100%;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;
