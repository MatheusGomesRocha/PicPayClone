import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './src/navigators/AppTab';


function Bar() {      /** Barra de status do aparelho */
  /**
   * barStyle="" recebe a cor do conteúdo
   * backgroundColor="" recebe o background da barra de status (somente para android)
   * Cor amarelo queimado FFc491
   */
  return (
    <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2"/>
  );
}

function App() {
  return(
      <NavigationContainer>
          <AppTab/>
          <Bar/>
      </NavigationContainer>
  );
}
export default App;