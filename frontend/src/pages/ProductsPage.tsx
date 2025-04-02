import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByWaxType } from '../services/productService';
import { Product, WaxType } from '../types/product';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { waxType } = useParams<{ waxType?: WaxType }>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = waxType 
          ? await getProductsByWaxType(waxType)
          : await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [waxType]);

  const getPageTitle = () => {
    if (waxType) {
      switch (waxType) {
        case 'soy':
          return '100% Soy Wax Candles';
        case 'palm':
          return 'Palm Wax Candles';
        case 'gel':
          return 'Gel Wax Candles';
        default:
          return 'Our Candles';
      }
    }
    return 'All Candles';
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">{getPageTitle()}</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductsPage;