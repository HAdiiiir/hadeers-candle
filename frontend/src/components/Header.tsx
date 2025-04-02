import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

interface CartIconProps {
  className?: string;
}

const CartIcon: React.FC<CartIconProps> = ({ className }) => (
  <FiShoppingCart className={className} />
);

const Header: React.FC = () => {
  return (
    <header className="bg-amber-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-800">
          Hadeer's Candle
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-amber-700 hover:text-amber-900">
            Home
          </Link>
          <Link to="/products" className="text-amber-700 hover:text-amber-900">
            Products
          </Link>
          <Link to="/about" className="text-amber-700 hover:text-amber-900">
            About
          </Link>
          <Link to="/cart" className="text-amber-700 hover:text-amber-900 flex items-center">
            <CartIcon className="mr-1" />
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;