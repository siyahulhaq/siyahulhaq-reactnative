import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationRoutes} from '../../types/navigation-types';
import HomeScreen from '../../screens/home';

const AppStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={NavigationRoutes.Home} component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
