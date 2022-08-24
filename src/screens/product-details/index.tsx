import {Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  NavigationRoutes,
  Routes,
  StackNavigationProps,
} from '../../types/navigation-types';
import styles from './styles';

type ProductDetailsProps = StackNavigationProps<
  Routes,
  NavigationRoutes.ProductDetails
>;

const ProductDetails: React.FC<ProductDetailsProps> = ({navigation, route}) => {
  const {product} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: product.name,
    });
  }, [navigation, product.name]);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.avatar}}
        style={styles.image}
        resizeMode="contain"
      />
      <ScrollView style={styles.productDetailsContainer}>
        <View style={styles.productMainDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={[styles.productName, styles.productPrice]}>
            ${product.price.toFixed(2)}
          </Text>
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
