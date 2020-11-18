import React from 'react';
import styled from 'styled-components/native';
// import HomeIcon from '../assets/svg/home.svg';
// import SearchIcon from '../assets/svg/search.svg';
// import TodayIcon from '../assets/svg/today.svg';
// import FavoriteIcon from '../assets/svg/favorite.svg';
// import AccountIcon from '../assets/svg/account.svg';


const Div = styled.View `
    flex-direction: row;
    background-color: #fff;
`;

const Texto = styled.Text`
    font-size: 10px;
    color: ${props=>props.color || '#6E7678'};
`;

const Touch = styled.TouchableOpacity `
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 70px;
`;

const TouchCenter = styled.TouchableHighlight `
    width: 70px;
    height: 70px;
    background-color: #109E4D;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    border-radius: 35px;
`;

export default ({state, descriptors, navigation, index}) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Div>
            <Touch key={index} onPress={() => goTo('home')}>
                <Texto>Inicio</Texto>
                {/* <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.5}} width="28" height="28" fill="#fff" /> */}
            </Touch>

            <Touch key={index} onPress={() => goTo('wallet')}>
            <Texto>Carteira</Texto>
                {/* <SearchIcon style={{opacity: state.index === 1 ? 1 : 0.5}} width="28" height="28" fill="#fff" /> */}
            </Touch>

            <TouchCenter underlayColor="rgba(255, 255, 255, 0.9)" key={index} onPress={() => goTo('pay')}>
            <Texto color="#fff">Pagar</Texto>
                {/* <TodayIcon width="32" height="32" fill="#0096C7" /> */}
            </TouchCenter>

            <Touch key={index} onPress={() => goTo('notification')}>
            <Texto>Notificações</Texto>
                {/* <FavoriteIcon style={{opacity: state.index === 3 ? 1 : 0.5}} width="28" height="28" fill="#fff" /> */}
            </Touch>

            <Touch key={index} onPress={() => goTo('config')}>
            <Texto>Ajustes</Texto>
                {/* <AccountIcon style={{opacity: state.index === 4 ? 1 : 0.5}} width="28" height="28" fill="#fff" /> */}
            </Touch>
        </Div>
    );
}