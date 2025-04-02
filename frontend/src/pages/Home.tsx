import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-amber-100 rounded-lg p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Welcome to Hadeer's Candle</h1>
          <p className="text-xl text-amber-800 mb-6">
            Handcrafted premium candles made with natural waxes
          </p>
          <Link 
            to="/products" 
            className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Shop Now
          </Link>
        </section>

        {/* Wax Types Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Our Wax Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-40 bg-amber-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">100% Soy Wax</h3>
              <p className="text-gray-600">
                Natural, clean-burning, and long-lasting. Perfect for those who prefer eco-friendly options.
              </p>
              <Link 
                to="/products/wax/soy" 
                className="mt-4 inline-block text-amber-700 hover:text-amber-900"
              >
                View Soy Candles →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-40 bg-amber-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Palm Wax</h3>
              <p className="text-gray-600">
                Creates beautiful crystalline patterns. A sustainable choice with excellent scent throw.
              </p>
              <Link 
                to="/products/wax/palm" 
                className="mt-4 inline-block text-amber-700 hover:text-amber-900"
              >
                View Palm Candles →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-40 bg-amber-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Gel Wax</h3>
              <p className="text-gray-600">
                Transparent and versatile, allowing for creative designs and embedded decorations.
              </p>
              <Link 
                to="/products/wax/gel" 
                className="mt-4 inline-block text-amber-700 hover:text-amber-900"
              >
                View Gel Candles →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">Featured Candles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product cards would be rendered here */}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">About Hadeer's Candle</h2>
          <p className="text-gray-700 mb-4">
            At Hadeer's Candle, we believe in creating more than just candles - we create experiences. 
            Each candle is hand-poured with care using premium natural waxes and high-quality fragrance oils.
          </p>
          <p className="text-gray-700 mb-4">
            Our candles come in beautiful IKEA glassware, available in various sizes to suit your needs:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>65g - EGP 299</li>
            <li>160g - EGP 379</li>
            <li>165g - EGP 390</li>
            <li>275g - EGP 540</li>
            <li>300g - EGP 620</li>
            <li>320g - EGP 724</li>
          </ul>
          <Link 
            to="/about" 
            className="text-amber-700 hover:text-amber-900 font-semibold"
          >
            Learn more about us →
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;