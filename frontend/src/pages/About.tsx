import React from 'react';
import Header from '../components/layout/Header';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-amber-900 mb-6">About Hadeer's Candle</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2023, Hadeer's Candle began as a small passion project in a home kitchen. 
              What started as a hobby quickly grew into a business dedicated to creating high-quality, 
              hand-poured candles using only the finest natural waxes and fragrance oils.
            </p>
            <p className="text-gray-700">
              Each candle is carefully crafted with attention to detail, ensuring a clean burn and 
              excellent scent throw that lasts from the first light to the very end.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-amber-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">100% Soy Wax</h3>
                <p className="text-gray-700">
                  Made from natural soybeans, our soy wax burns cleaner and longer than paraffin, 
                  with no harmful toxins released into your home.
                </p>
              </div>
              <div className="bg-amber-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Palm Wax</h3>
                <p className="text-gray-700">
                  Sustainably sourced palm wax creates beautiful crystalline patterns and has excellent 
                  scent retention for a stronger fragrance throw.
                </p>
              </div>
              <div className="bg-amber-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Gel Wax</h3>
                <p className="text-gray-700">
                  Our transparent gel wax allows for creative designs and embedded decorations, 
                  perfect for decorative container candles.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Glassware</h2>
            <p className="text-gray-700 mb-4">
              All our candles come in premium IKEA glass containers, available in multiple sizes:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>65g - EGP 299</li>
              <li>160g - EGP 379</li>
              <li>165g - EGP 390</li>
              <li>275g - EGP 540</li>
              <li>300g - EGP 620</li>
              <li>320g - EGP 724</li>
            </ul>
            <p className="text-gray-700">
              These containers can be repurposed after use for storage, planters, or decorative items.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Commitment</h2>
            <p className="text-gray-700">
              At Hadeer's Candle, we're committed to sustainability and quality. We source our materials 
              responsibly and ensure each candle meets our high standards before reaching your home.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;