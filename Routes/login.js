const express = require("express");
const route = express.Router();
const User = require("../models/user");
const uuid = require('uuid').v4;
const validate = require('../utils/validate')

const session = {};
route.post("/", async (req, res) => {
  try {
    const {email, password } = req.body;
    if (!validate({email,password})) {
      return res.status(404).json({success:false, message: "user not found" });
    }
    const user = User.find({email:email});
    const sessionId = uuid();
    session[sessionId] = {email}
    // console.log(session[sessionId])
    res.set('Set-cookie',`session=${sessionId}`);
    res.status(200).json({success:true, message:'auth cookie set'})
  } catch (error) {
    console.log("error while loging in ", error);
    return res.status(404).json({ message: "Error ", error });
  }
});

module.exports= {route,session}
