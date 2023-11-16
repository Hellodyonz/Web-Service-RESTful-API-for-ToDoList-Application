const jwt = require('jsonwebtoken');
const KEY = "secret";

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({
            message: 'Token not provided' 
        });
    }

    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: 'Invalid token' 
        });
    }

    try {
        const payload = jwt.verify(token, KEY);
        req.payload = payload;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Failed to authenticate token' 
        });
    }
}

module.exports = verifyToken;
