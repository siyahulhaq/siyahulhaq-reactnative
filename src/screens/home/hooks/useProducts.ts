import {useCallback, useEffect, useState} from 'react';
import useUpdateEffect from '../../../hooks/common/useUpdateEffect';
import {Category, Product} from '../../../types/api-types';
import fetchProducts from '../../../utils/api/helpers/fetchProducts';

let productsCache: Product[] = [];

function useProducts(selectedCategory: Category | null) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const getProducts = useCallback(() => {
    setLoading(true);
    fetchProducts()
      .then(res => {
        productsCache = res.products;
        setProducts(productsCache);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(selectedCategory);
  useUpdateEffect(() => {
    if (selectedCategory) {
      setProducts(
        productsCache.filter(p => p.category === selectedCategory.name),
      );
    } else {
      setProducts(productsCache);
    }
  }, [selectedCategory]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return {products, loading};
}

export default useProducts;
