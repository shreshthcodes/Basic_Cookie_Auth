const express = require('express')
const User = require('../models/user')
const route = express.Router();

route.post('/',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const newUser = await User.create({
            name:name,
            email:email,
            password:password
        })
        res.json({success:true,newUser})
    }
    catch(error){
        console.log('error while creating the user ',error);
        res.json({success:false,message:"user not created"})
    }
})


module.exports = route;