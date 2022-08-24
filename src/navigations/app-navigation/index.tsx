import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationRoutes} from '../../types/navigation-types';
import HomeScreen from '../../screens/home';
import ProductDetails from '../../screens/product-details';
import AddProduct from '../../screens/add-product';

const AppStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={NavigationRoutes.Home}
        component={HomeScreen}
        options={{
          title: 'U Payments store',
        }}
      />
      <AppStack.Screen
        name={NavigationRoutes.ProductDetails}
        component={ProductDetails}
      />
      <AppStack.Screen
        name={NavigationRoutes.AddProduct}
        component={AddProduct}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
