import {useCallback, useEffect, useState} from 'react';
import {Category} from '../../../types/api-types';
import fetchCategories from '../../../utils/api/helpers/fetchCategories';

let categoryCache: Category[] = [];

function useCategories() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = useCallback(() => {
    if (!categoryCache.length) {
      setLoading(true);
      fetchCategories()
        .then(res => {
          categoryCache = res.categories;
          setCategories(res.categories);
        })
        .catch(err => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
      return;
    }
    setCategories(categoryCache);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return {
    categories,
    loading,
  };
}

export default useCategories;
