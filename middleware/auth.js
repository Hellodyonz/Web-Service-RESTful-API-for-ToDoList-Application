const jwt = require('jsonwebtoken');
const KEY = "secret";

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({
            message: 'Token not provided' // Mengubah pesan sesuai dengan status 401
        });
    }

    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: 'Invalid token' // Mengubah pesan sesuai dengan status 401
        });
    }

    try {
        const payload = jwt.verify(token, KEY);
        req.payload = payload;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Failed to authenticate token' // Mengubah pesan sesuai dengan status 401
        });
    }
}

module.exports = verifyToken;




// const jwt = require('jsonwebtoken')

// const KEY = "secret"

// const verifyToken=(req,res,next)=>{
//     const header = req.headers.authorization

//     if(!header){
//         res.json({
//             message: 'gaada kocak'
//         })
//         return
//     }

//     const token = header.split(" ")[1];


//     if(!token){
//         res.json({
//             message: 'invalid token'
//         })
//         return
//     }

//     const payload = jwt.verify(token, KEY)

//     req.payload = payload

//     next()
// }

// module.exports = verifyToken