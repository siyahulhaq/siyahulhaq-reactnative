import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigations/app-navigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
