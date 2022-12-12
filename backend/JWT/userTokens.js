import config from '../config.js';
import jwt from 'jsonwebtoken';

export function generateAccessToken(id) {

    const secretKey = config.user.secretKey;

    const payload = {
        id,
    }

    return jwt.sign(payload, secretKey, { expiresIn: '24h' });
}