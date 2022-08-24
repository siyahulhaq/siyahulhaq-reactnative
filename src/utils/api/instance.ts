import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {ACCESS_TOKEN} from '../constants/access_token';
import {BASE_URL} from '../constants/urls';

export const routes = {
  categories: '/categories',
  products: '/products',
};

class Api {
  private baseUrl;
  private static instance: Api;
  private axiosInstance: AxiosInstance;
  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }
  private constructor() {
    this.baseUrl = BASE_URL;
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 60000,
    });
    this.useAxiosMiddlewares();
  }

  private useAxiosMiddlewares() {
    this.axiosInstance.interceptors.request.use(
      async function (config) {
        const token = ACCESS_TOKEN;
        if (token) {
          if (!config.headers) {
            config.headers = {};
          }
          const auth = 'Bearer ' + token;
          config.headers = {
            ...config.headers,
            Authorization: auth,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
        }
        console.log(JSON.stringify(config, null, 2));
        return config;
      },
      error => {
        console.error(error);
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error?.response?.status === 401) {
          //   logoutAction()(store.dispatch, store.getState as any);
        }
        return Promise.reject(error);
      },
    );
  }

  async get<T>(
    url: string,
    params?: {[key: string]: string | number | undefined},
  ) {
    try {
      const response = await this.axiosInstance.get<T>(url, {params});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async post<T>(url: string, data: any, config?: AxiosRequestConfig) {
    try {
      const response = await this.axiosInstance?.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Api;
