import {ProductsResponse} from '../../../types/api-types';
import Api, {routes} from '../instance';

const instance = Api.getInstance();

const fetchProducts = async () => {
  const response = await instance.get<ProductsResponse>(routes.products);
  return response;
};

export default fetchProducts;
