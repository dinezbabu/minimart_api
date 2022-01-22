const express = require('express');
const mongoose = require('mongoose');
const MONGO_DB_CONFIG=require('./config/db.config');

const auth = require('./middlewares/auth');
const errors=require('./middlewares/errors');
const swaggerUi= require('swagger-ui-express'),swaggerDocument=require("./swagger.json");

const unless = require('express-unless');

const app= express();

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_DB_CONFIG.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(
    ()=>{
        console.log('Connected to DB');
    },
    (error)=>{
        console.log("DB can't be connected: "+error);
    }
);

auth.authenticateToken.unless =unless;
// app.use(
//     auth.authenticateToken.unless({
//         path:[
//             {url:"/users/login",methods:["POST"]},
//             {url:"/users/register",methods:["POST"]},
//         ],
//     })
// );

app.use(express.json());

app.use("/users",require("./routes/users.routes"));
app.use("/uploads",express.static('uploads'));
app.use("/api",require("./routes/categories.routes"));
app.use(errors.errorHandler);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(process.env.port|| 4000,function (){
    console.log("Ready you go");
});