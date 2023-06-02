const express = require('express')
const route = express.Router();

route.get('/',(req,res)=>{
    const Cookie = req.headers.cookie.split('=')[1]
    const message = `Auth Cookie value ${Cookie}`
    res.json({cookie:message})
})

module.exports = route;