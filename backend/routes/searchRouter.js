import { Router } from 'express';
import getResultSearch from '../controllers/productsController.js';

const router = Router();

router.get('/searchProduct', getResultSearch);

export default router;
