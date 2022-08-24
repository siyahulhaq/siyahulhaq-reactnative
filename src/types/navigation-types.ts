import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Product} from './api-types';

export enum NavigationRoutes {
  Home = 'Home',
  ProductDetails = 'ProductDetails',
  AddProduct = 'AddProduct',
}

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  Home: undefined;
  ProductDetails: {
    product: Product;
  };
  AddProduct: undefined;
};
