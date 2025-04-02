import axios from 'axios';
import { Product, WaxType } from '../types/product';

const API_URL = 'http://localhost:5000/api/products';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getProductsByWaxType = async (waxType: WaxType): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/wax/${waxType}`);
  return response.data;
};