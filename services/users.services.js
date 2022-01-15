const User= require("../models/user.model");
const bcrypt=require("bcryptjs");
const auth=require("../middlewares/auth");

async function login({userName,password},callback){
    const user= await User.findOne({userName});

    if(user!=null){
        if(bcrypt.compareSync(password,user.password)){
            const token =auth.generateAccessToken(userName);
            return callback(null,{...user.toJSON(),token});
        }
        else {
            return callback({
                message:"Invalid Username/Password!"
            });
        }
    }
    else{
        return callback({
            message:"Invalid Username/Password!"
        });
    }
}

async  function register(params,callback){
    if(params.userName === undefined){
        return callback({message:"Username Required"});
    }

    const user =new User(params);
    user.save()
        .then((response)=>{
            return callback(null,response);
        })
        .catch((error)=>{
            return callback(error);
        });
}

module.exports ={
    login,
    register,
};