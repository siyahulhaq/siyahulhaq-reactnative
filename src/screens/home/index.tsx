import {ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
// import styles from './styles';
import {
  NavigationRoutes,
  Routes,
  StackNavigationProps,
} from '../../types/navigation-types';
import {FlatList} from 'react-native-gesture-handler';
import HomePageHeader from '../../components/category-list';
import useProducts from './hooks/useProducts';
import {Category, Product} from '../../types/api-types';
import ProductCard from '../../components/product-card';
import ListEmpty from './components/list-empty';
import styles from './styles';

type HomeScreenProps = StackNavigationProps<Routes, NavigationRoutes.Home>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<null | Category>(
    null,
  );
  const {products, loading} = useProducts(selectedCategory);
  const onSelectCategory = useCallback((category: Category | null) => {
    setSelectedCategory(category);
  }, []);

  const onPressAdd = useCallback(() => {
    navigation.navigate(NavigationRoutes.AddProduct);
  }, [navigation]);

  const listFooterItem = (
    <TouchableOpacity onPress={onPressAdd} style={styles.fab}>
      <Text style={styles.fabbtn}>+</Text>
    </TouchableOpacity>
  );
  const renderItem: ListRenderItem<Product> = ({item}) => {
    return <ProductCard product={item} navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <HomePageHeader
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
          />
        }
        data={products}
        numColumns={2}
        renderItem={renderItem}
        ListEmptyComponent={<ListEmpty loading={loading} />}
        keyExtractor={({_id}) => _id!}
      />
      {listFooterItem}
    </View>
  );
};

export default HomeScreen;
