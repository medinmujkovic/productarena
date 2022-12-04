const express = require ('express');
const User=require("../models/user");
const authRouter = express.Router();
authRouter.post('/api/signup',async(req,res)=>{
    const {name,email,password}=reg.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({msg:"User with same email already exists!"});
    }
    let user=new User({
        email,
        password,
        name,
    })
    user=await user.save();
    res.json(user);
    //post in database
    //return that data to the user
})

module.exports=authRouter //can be used anywhere in the app
