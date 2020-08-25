import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Route from 'config/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store';

SplashScreen.preventAutoHideAsync();

const App = () => {
  SplashScreen.hideAsync();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'}>
          <ViewStyled>
            <Route />
          </ViewStyled>
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const ViewStyled = styled.View`
  flex: 1;
  justify-content: center;
`;

export default App;
