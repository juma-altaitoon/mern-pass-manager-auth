const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const cookie = req.header("cookie");
    const token = cookie.split('=')[1];
    console.log(token)
    
    if(!token){
        return res.status(401).json({"message": "You are not authorized, API Protected!"})
    }    
    jwt.verify(
        token,
        process.env.SECRET_KEY,
        (err, user) => {
            if(err) {
                return res.status(401).json({"message": "Invalid Token"});
            }
            // console.log(user.id)
            req.id = user.user.id;
        }
    )
    next();
}   