import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Get product by ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, weight, waxType, images, stock } = req.body;
    
    const newProduct: IProduct = new Product({
      name,
      description,
      price,
      weight,
      waxType,
      images,
      stock
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, weight, waxType, images, stock } = req.body;
    
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        weight,
        waxType,
        images,
        stock,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};

// Get products by wax type
export const getProductsByWaxType = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ waxType: req.params.waxType });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products by wax type', error });
  }
};