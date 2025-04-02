import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { Product } from '../types/product';
import Header from '../components/layout/Header';
import { FiShoppingCart } from 'react-icons/fi';

// إنشاء مكون أيقونة مخصص
const ShoppingCartIcon: React.FC<{ className?: string }> = ({ className }) => {
  const Icon = FiShoppingCart as React.ComponentType<{ className?: string }>;
  return <Icon className={className} />;
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id!);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product?.name} to cart`);
  };

  const getWaxTypeDescription = (waxType: string) => {
    switch (waxType) {
      case 'soy':
        return '100% Natural Soy Wax - Clean burning, eco-friendly, and long-lasting';
      case 'palm':
        return 'Premium Palm Wax - Creates beautiful crystalline patterns';
      case 'gel':
        return 'Clear Gel Wax - Perfect for decorative and container candles';
      default:
        return waxType;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
              <div className="grid grid-cols-3 gap-2 mt-4">
                {product.images.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover rounded cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-amber-900 mb-2">{product.name}</h1>
            <p className="text-xl text-amber-800 mb-4">EGP {product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Wax Type</h2>
              <p className="text-amber-700">{getWaxTypeDescription(product.waxType)}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Details</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Weight: {product.weight}g</li>
                <li>IKEA glassware included</li>
                <li>Burn time: Approximately {Math.round(product.weight * 0.8)} hours</li>
                <li>100% handmade</li>
              </ul>
            </div>

            <div className="flex items-center mb-6">
              <label htmlFor="quantity" className="mr-4 font-semibold">Quantity:</label>
              <select 
                id="quantity" 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border border-amber-300 rounded px-3 py-1"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={handleAddToCart}
              className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors flex items-center"
            >
              <ShoppingCartIcon className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;