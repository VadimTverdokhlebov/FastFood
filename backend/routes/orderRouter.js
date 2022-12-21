import { Router } from 'express';
import controller from '../controllers/orderController.js';
import authJwtMiddleware from '../middleware/authJwtMiddleware.js';

const router = Router();

router.post('/order', authJwtMiddleware, controller.addOrder);
router.get('/getOrders', authJwtMiddleware, controller.getOrders);

export default router;
