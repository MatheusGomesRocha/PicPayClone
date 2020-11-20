import React from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/svg/home.svg';
import HomeFullIcon from '../assets/svg/home_full.svg';
import WalletIcon from '../assets/svg/wallet.svg';
import WalletFullIcon from '../assets/svg/wallet_full.svg';
import PayIcon from '../assets/svg/dollar.svg';
import BellIcon from '../assets/svg/bell.svg';
import BellFullIcon from '../assets/svg/bell_full.svg';
import ConfigIcon from '../assets/svg/config.svg';
import ConfigFullIcon from '../assets/svg/config_full.svg';

const Div = styled.View`
    flex-direction: row;
    background-color: #fff;
    borderTopWidth: 1px;
    borderTopColor: #ddd;
    height: 57px;
`;

const Texto = styled.Text`
    font-size: 10px;
    color: ${props => props.color || '#6E7678'};
`;

const Touch = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TouchCenter = styled.TouchableHighlight`
    width: 65px;
    height: 65px;
    background-color: ${props=>props.bgColor || '#5ad2f4'};
    justify-content: center;
    align-items: center;
    margin-top: -15px;
    border-radius: 35px;
`;

export default ({ state, descriptors, navigation, index }) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Div>
            <Touch key={index} onPress={() => goTo('home')}>
                <>
                    {state.index == 0 ?
                        <HomeFullIcon width="25" height="25" fill="#1fa1c7" />
                        :
                        <HomeIcon width="25" height="25" fill="#4d565b" />
                    }
                    <Texto color={state.index == 0 && '#1fa1c7'}>Inicio</Texto>
                </>
            </Touch>

            <Touch key={index} onPress={() => goTo('wallet')}>
                <>
                    {state.index == 1 ?
                        <WalletFullIcon width="25" height="25" fill="#1fa1c7" />
                        :
                        <WalletIcon width="25" height="25" fill="#4d565b" />
                    }
                    <Texto color={state.index == 1 && '#1fa1c7'}>Carteira</Texto>
                </>
            </Touch>

            <TouchCenter bgColor={state.index == 2 && '#1fa1c7'} underlayColor="#1fa1c7" key={index} onPress={() => goTo('pay')}>
                <>
                    <PayIcon width="25" height="25" fill="#fff" />
                    <Texto color="#fff">Pagar</Texto>
                </>
            </TouchCenter>

            <Touch key={index} onPress={() => goTo('notification')}>
                <>
                    {state.index == 3 ?
                        <BellFullIcon width="25" height="25" fill="#1fa1c7" />
                        :
                        <BellIcon width="25" height="25" fill="#4d565b" />
                    }
                    <Texto color={state.index == 3 && '#1fa1c7'}>Notificações</Texto>
                </>
            </Touch>

            <Touch key={index} onPress={() => goTo('config')}>
                <>
                    {state.index == 4 ?
                        <ConfigFullIcon width="25" height="25" fill="#1fa1c7" />
                        :
                        <ConfigIcon width="25" height="25" fill="#4d565b" />
                    }
                    <Texto color={state.index == 4 && '#1fa1c7'}>Ajustes</Texto>
                </>
            </Touch>
        </Div>
    );
}