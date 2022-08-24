import {CategoriesResponse} from '../../../types/api-types';
import Api, {routes} from '../instance';

const instance = Api.getInstance();

const fetchCategories = async () => {
  const response = await instance.get<CategoriesResponse>(routes.categories);
  return response;
};

export default fetchCategories;
