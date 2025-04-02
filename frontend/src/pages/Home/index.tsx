import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ProductCard from '../../components/ui/Cards/ProductCard'
import './assets/styles/globals.css';

const HomePage = () => {
  const featuredProducts = [
    {
      id: '1',
      title: 'Vanilla Dream',
      price: 299,
      image: '/images/vanilla.jpg',
      waxType: 'soy'
    },
    {
      id: '2',
      title: 'Lavender Fields',
      price: 379,
      image: '/images/lavender.jpg',
      waxType: 'palm'
    },
    {
      id: '3',
      title: 'Ocean Breeze',
      price: 349,
      image: '/images/ocean.jpg',
      waxType: 'gel'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Premium Handmade Candles</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the perfect ambiance with our natural wax candles
            </p>
            <button className="btn-primary px-8 py-3 text-lg">
              Shop Now
            </button>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
                <ProductCard 
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    image={product.image}
    waxType={product.waxType as 'soy' | 'palm' | 'gel'} // Type assertion هنا
  />
))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage