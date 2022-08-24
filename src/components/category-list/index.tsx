import {ActivityIndicator, ListRenderItem} from 'react-native';
import React from 'react';
import useCategories from '../../screens/home/hooks/useCategories';
import {FlatList} from 'react-native-gesture-handler';
import {Category} from '../../types/api-types';
import CategoryButton from './CategoryButton';
import styles from '../../screens/home/styles';

interface HomePageHeaderProps {
  selectedCategory: Category | null | string;
  onSelectCategory: (category: Category | null) => void;
  showAll?: boolean;
}

const CategoryList: React.FC<HomePageHeaderProps> = ({
  onSelectCategory,
  selectedCategory,
  showAll,
}) => {
  const {categories, loading} = useCategories();
  const renderItem: ListRenderItem<Category> = ({item}) => {
    const isSelected =
      typeof selectedCategory === 'string'
        ? item.name === selectedCategory
        : item._id === selectedCategory?._id;
    return (
      <CategoryButton
        isSelected={isSelected}
        title={item.name || ''}
        onPress={() => {
          onSelectCategory(item);
        }}
      />
    );
  };
  if (loading) {
    return <ActivityIndicator size={18} />;
  }
  return (
    <FlatList
      data={categories}
      contentContainerStyle={styles.categoryContainer}
      horizontal
      ListHeaderComponent={
        showAll ? (
          <CategoryButton
            isSelected={selectedCategory === null}
            title="All"
            onPress={() => {
              onSelectCategory(null);
            }}
          />
        ) : undefined
      }
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

CategoryList.defaultProps = {
  showAll: true,
};

export default CategoryList;
