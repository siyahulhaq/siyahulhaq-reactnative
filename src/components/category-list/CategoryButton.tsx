import {Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../../screens/home/styles';

interface CategoryButtonProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  onPress,
  title,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        // eslint-disable-next-line react-native/no-inline-styles
        {borderColor: '#000000', borderWidth: isSelected ? 1 : 0},
      ]}
      onPress={onPress}>
      <Text style={styles.categoryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
