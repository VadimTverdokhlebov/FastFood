import config from '../config.js';
import jwt from 'jsonwebtoken';

export function generateAccessToken(id, email) {

    const secretKey = config.user.secretKey;

    const payload = {
        id,
        email,
    }

    return jwt.sign(payload, secretKey, { expiresIn: '24h' });
}
