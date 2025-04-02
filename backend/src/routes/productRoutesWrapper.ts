// src/routes/productRoutesWrapper.ts
import router from './productRoutes';
import { Application } from 'express';


export default function productRoutesWrapper(app: Application) {
  app.use('/api/products', router);
}