export type WaxType = 'soy' | 'palm' | 'gel';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  waxType: WaxType;
  images: string[];
  stock: number;
  createdAt: string;
  updatedAt: string;
}