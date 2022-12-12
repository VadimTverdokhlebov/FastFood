import { Router } from 'express';
import { getProduct } from '../controllers/productsController.js'

const router = Router();

router.get('/products', getProduct);

export default router;