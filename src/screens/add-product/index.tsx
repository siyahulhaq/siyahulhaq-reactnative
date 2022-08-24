import {View, Text, Button, Alert, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {
  NavigationRoutes,
  Routes,
  StackNavigationProps,
} from '../../types/navigation-types';
import InputField from '../../components/input-field';
import styles from './styles';
import CategoryList from '../../components/category-list';
import {useFormik} from 'formik';
import {Category} from '../../types/api-types';
import postProduct from '../../utils/api/helpers/postProduct';
import {AxiosError} from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Title'),
  price: Yup.string().required().label('Price'),
  category: Yup.string().required().label('Category'),
  description: Yup.string().required().label('Description'),
  avatar: Yup.string().required().label('Image Link'),
  developerEmail: Yup.string().email().required().label('DeveloperEmail'),
});

type AddProductProps = StackNavigationProps<
  Routes,
  NavigationRoutes.AddProduct
>;

const AddProduct: React.FC<AddProductProps> = ({navigation}) => {
  const [posting, setPositing] = useState(false);
  const addProductForm = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      description: '',
      avatar: '',
      developerEmail: 'siyahulhaq124@gmail.com',
    },
    validationSchema,
    onSubmit: values => {
      setPositing(true);
      postProduct({...values, price: Number(values.price)})
        .then(res => {
          addProductForm.resetForm();
          navigation.navigate(NavigationRoutes.ProductDetails, {
            product: res.product,
          });
        })
        .catch((error: AxiosError) => {
          Alert.alert(error.message);
        })
        .finally(() => {
          setPositing(false);
        });
    },
  });

  const onChangeCategory = (category: Category | null) => {
    addProductForm.setFieldValue('category', category?.name || '');
  };

  const handleChange = (text: string, field: string) => {
    addProductForm.setFieldValue(field, text);
  };

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Product Title"
        placeholderTextColor="#ccc"
        value={addProductForm.values.name}
        onChangeText={text => handleChange(text, 'name')}
        style={styles.inputField}
        error={addProductForm.touched.name && addProductForm.errors.name}
      />
      <InputField
        placeholder="Price $"
        placeholderTextColor="#ccc"
        keyboardType="number-pad"
        onChangeText={text => handleChange(text, 'price')}
        style={styles.inputField}
        value={addProductForm.values.price}
        error={addProductForm.touched.price && addProductForm.errors.price}
      />
      <InputField
        placeholder="Description"
        placeholderTextColor="#ccc"
        multiline
        numberOfLines={4}
        onChangeText={text => handleChange(text, 'description')}
        style={styles.inputField}
        value={addProductForm.values.description}
        error={
          addProductForm.touched.description &&
          addProductForm.errors.description
        }
      />
      <InputField
        placeholder="Image Link"
        placeholderTextColor="#ccc"
        onChangeText={text => handleChange(text, 'avatar')}
        style={styles.inputField}
        value={addProductForm.values.avatar}
        error={addProductForm.touched.avatar && addProductForm.errors.avatar}
      />
      <Text>Select Category</Text>
      <View>
        <CategoryList
          selectedCategory={addProductForm.values.category}
          onSelectCategory={onChangeCategory}
          showAll={false}
        />
        {addProductForm.touched.category &&
          !!addProductForm.errors.category && (
            <Text style={styles.error}>{addProductForm.errors.category}</Text>
          )}
      </View>
      {posting ? (
        <ActivityIndicator size="small" />
      ) : (
        <Button title="Add Product" onPress={addProductForm.handleSubmit} />
      )}
    </View>
  );
};

export default AddProduct;
