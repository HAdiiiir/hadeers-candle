import { FiShoppingCart, FiHeart } from 'react-icons/fi'

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  waxType: 'soy' | 'palm' | 'gel'
}

const ProductCard = ({ id, title, price, image, waxType }: ProductCardProps) => {
  const waxTypeColors = {
    soy: 'bg-green-100 text-green-800',
    palm: 'bg-amber-100 text-amber-800',
    gel: 'bg-blue-100 text-blue-800'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <FiHeart className="w-5 h-5 text-gray-600" />
        </button>
        <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full ${waxTypeColors[waxType]}`}>
          {waxType.toUpperCase()}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-primary-600 font-bold">EGP {price.toFixed(2)}</span>
          <button className="p-2 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200">
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard