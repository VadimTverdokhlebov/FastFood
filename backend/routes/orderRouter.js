import { Router } from 'express';
import controller from '../controllers/orderController.js';

const router = Router();

router.post('/order', controller.addOrder);
router.get('/getOrders', controller.getOrders);

export default router;