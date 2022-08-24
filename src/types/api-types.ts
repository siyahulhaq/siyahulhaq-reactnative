export interface BasicDataType {
  _id?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type Category = BasicDataType;

export interface Product extends BasicDataType {
  avatar: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
}

type ResponseType<T> = {
  message: string;
} & T;

export type CategoriesResponse = ResponseType<{
  categories: Category[];
}>;

export type ProductsResponse = ResponseType<{
  products: Product[];
}>;
export type ProductResponse = ResponseType<{
  product: Product;
}>;
