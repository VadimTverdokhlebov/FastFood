import { Router } from 'express';
import getResultSearch from '../controllers/searchController.js';

const router = Router();

router.get('/searchProduct', getResultSearch);

export default router;
