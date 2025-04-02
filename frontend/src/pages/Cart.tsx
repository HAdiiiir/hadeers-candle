import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { FiShoppingCart, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// حل بديل بدون استخدام IconType
const CartIcon: React.FC<{ className?: string }> = ({ className }) => {
  const Icon = FiShoppingCart as React.ComponentType<{ className?: string }>;
  return <Icon className={className} />;
};

const TrashIcon: React.FC<{ className?: string }> = ({ className }) => {
  const Icon = FiTrash2 as React.ComponentType<{ className?: string }>;
  return <Icon className={className} />;
};

const BackIcon: React.FC<{ className?: string }> = ({ className }) => {
  const Icon = FiArrowLeft as React.ComponentType<{ className?: string }>;
  return <Icon className={className} />;
};

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight: number;
  waxType: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Vanilla Dream',
      price: 299,
      quantity: 2,
      image: 'vanilla-dream.jpg',
      weight: 65,
      waxType: 'soy'
    },
    {
      id: '2',
      name: 'Lavender Fields',
      price: 379,
      quantity: 1,
      image: 'lavender-fields.jpg',
      weight: 160,
      waxType: 'soy'
    }
  ]);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-amber-900 flex items-center">
                  <CartIcon className="mr-2" />
                  Your Cart ({cartItems.length})
                </h1>
                <Link to="/products" className="text-amber-700 hover:text-amber-900 flex items-center">
                  <BackIcon className="mr-1" />
                  Continue Shopping
                </Link>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Your cart is empty</p>
                  <Link 
                    to="/products" 
                    className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-amber-100">
                  {cartItems.map(item => (
                    <div key={item.id} className="py-4 flex flex-col sm:flex-row gap-4">
                      <div className="sm:w-1/4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <div className="sm:w-2/4">
                        <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                        <p className="text-amber-700">{item.weight}g - {item.waxType === 'soy' ? 'Soy Wax' : item.waxType === 'palm' ? 'Palm Wax' : 'Gel Wax'}</p>
                        <p className="text-gray-600">EGP {item.price.toFixed(2)}</p>
                      </div>
                      <div className="sm:w-1/4 flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-amber-100 text-amber-800 px-2 py-1 rounded-l"
                          >
                            -
                          </button>
                          <span className="bg-amber-50 px-3 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-amber-100 text-amber-800 px-2 py-1 rounded-r"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 flex items-center"
                        >
                          <TrashIcon className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-bold text-amber-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>EGP {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingFee === 0 ? 'FREE' : `EGP ${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-amber-100 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>EGP {total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 transition-colors"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>

              {subtotal < 1000 && (
                <p className="text-sm text-center mt-3 text-amber-700">
                  Spend EGP {(1000 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;