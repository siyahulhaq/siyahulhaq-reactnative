import {Product, ProductResponse} from '../../../types/api-types';
import Api, {routes} from '../instance';

const postProduct = async (product: Product) => {
  const response = await Api.getInstance().post<ProductResponse>(
    routes.products,
    product,
  );
  return response;
};

export default postProduct;
