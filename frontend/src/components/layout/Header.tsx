import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-600">
          Hadeer's Candle
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary-500 transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-primary-500 transition-colors">
            Products
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary-500 transition-colors">
            About
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative text-gray-700 hover:text-primary-500">
              <FiShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </Link>
            <Link to="/account">
              <FiUser className="w-6 h-6 text-gray-700 hover:text-primary-500" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header