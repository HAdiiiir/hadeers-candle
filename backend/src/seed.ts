// backend/src/seed.ts
import mongoose from 'mongoose';
import Product, { IProduct } from './models/Product';
import dotenv from 'dotenv';

dotenv.config();

const products: Partial<IProduct>[] = [
  {
    name: 'Vanilla Dream',
    description: 'A sweet vanilla scented candle in IKEA glassware',
    price: 299,
    weight: 65,
    waxType: 'soy',
    images: ['vanilla-dream.jpg'],
    stock: 50
  },
  {
    name: 'Lavender Fields',
    description: 'Relaxing lavender fragrance in IKEA glassware',
    price: 379,
    weight: 160,
    waxType: 'soy',
    images: ['lavender-fields.jpg'],
    stock: 30
  },
  // Add more products following the same pattern
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();