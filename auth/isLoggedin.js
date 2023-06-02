const { session } = require("../Routes/login");

const isLoggedIn=(req,res,next)=>{
    const sessionCookie = req.headers.cookie.split('=')[1];
    console.log('Cookie value',sessionCookie);
    // const flag = session[sessionCookie]?true:false;
    if(session[sessionCookie])
       next()
    else
    res.status(400).json({message:'User needs to log in'});

}
module.exports=isLoggedIn