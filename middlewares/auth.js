const jwt = require('jsonwebtoken');

function authenticateToken(req,res,next){
    const authHeader= req.headers["authorization"];
    const token =authHeader && authHeader.split(' ')[1];

    if(token ==null) return res.sendStatus(401);

    jwt.verify(token,"minimart_secretkey",(err,user)=>{
        if (err) return res.sendStatus(403);
        req.user=user;
        next();
    });
}

function generateAccessToken(userName){
    return jwt.sign({data:userName},"minimart_secretkey",{
       expiresIn: "1h"
    });
}

module.exports ={
    authenticateToken,
    generateAccessToken,
};