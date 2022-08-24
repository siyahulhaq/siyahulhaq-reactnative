import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {Product} from '../../types/api-types';
import styles from './styles';
import {NavigationRoutes, Routes} from '../../types/navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

interface ProductCardProps {
  product: Product;
  navigation: StackNavigationProp<Routes, keyof Routes>;
}

const ProductCard: React.FC<ProductCardProps> = ({product, navigation}) => {
  const onItemPress = useCallback(() => {
    navigation.navigate(NavigationRoutes.ProductDetails, {
      product,
    });
  }, [navigation, product]);

  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <Image
        source={{
          uri: product.avatar,
        }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productDetailsContainer}>
        <Text numberOfLines={2} style={styles.productName}>
          {product.name}
        </Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
