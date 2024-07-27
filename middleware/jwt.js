import jwt from 'jsonwebtoken';

const secret = 'your-secret-key';

export const generateToken = (userId) => {
    return jwt.sign({ userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Invalid token' });
    }
};