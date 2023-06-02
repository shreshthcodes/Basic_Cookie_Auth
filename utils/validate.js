const User = require('../models/user')
const validate=async({email,password})=>{
    const existingUser = await User.find({
      email: email,
      password: password,
    });
    if(existingUser.length==0)
    return false;
    else 
    return true;
    
}
module.exports = validate