import jwt from 'jsonwebtoken';
import config from '../config.js';

export default function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'User is not login' });
    }

    const decodetData = jwt.verify(token, config.user.secretKey);
    req.user = decodetData;
    next();
  } catch (e) {
    console.error(e);
    return res.status(403).json({ message: 'User is not login' });
  }
}
