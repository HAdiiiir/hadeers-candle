import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-5xl font-bold text-amber-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition-colors inline-block"
          >
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;