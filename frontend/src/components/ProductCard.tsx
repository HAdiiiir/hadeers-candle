import React from 'react';
import { Product } from '../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getWaxTypeName = (waxType: string) => {
    switch (waxType) {
      case 'soy':
        return '100% Soy Wax';
      case 'palm':
        return 'Palm Wax';
      case 'gel':
        return 'Gel Wax';
      default:
        return waxType;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product._id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-amber-900 mb-1">{product.name}</h3>
          <p className="text-sm text-amber-700 mb-2">{getWaxTypeName(product.waxType)}</p>
          <p className="text-sm text-gray-600 mb-2">{product.weight}g</p>
          <p className="text-lg font-bold text-amber-800">EGP {product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;