import { Router } from 'express';
import { check } from 'express-validator';
import controller from '../controllers/authController.js';
import authJwtMiddleware from '../middleware/authJwtMiddleware.js';

const router = Router();

router.post('/registration', [
    check('email', 'The name is not empty').notEmpty(),
    check('email', 'The name must be an email').isEmail(),
    check('password', 'The password must be less than 4 and more than 10 characters').isLength({ min: 4, max: 10 }),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', authJwtMiddleware, controller.checkLogin);

export default router;