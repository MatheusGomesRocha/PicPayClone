import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store';

function App() {
  return(
      <Provider store={store}>
          <NavigationContainer>
              <PersistGate loading={null} persistor={persistor}>
                  <MainStack/>
              </PersistGate>
          </NavigationContainer>
      </Provider>
  );
}
export default App;