//Use postman for testing routes

const express = require('express')
const app = express();
const homeRoute = require('./Routes/home')
const connectDB = require('./db/connect')
const userSignUp = require('./Routes/signup')
const userLogin = require('./Routes/login')
const isLoggedIn = require('./auth/isLoggedin')
require('dotenv').config()
const port = process.env.PORT

//middlewares
app.use(express.json())

//routes
app.use('/signup',userSignUp) // signup route for user
app.use('/login',userLogin.route) // login route for generatin cookie
app.use('/home',isLoggedIn,homeRoute) //see the cookie value generated during log in


const startServer=()=>{
    try{
        connectDB(process.env.DB)
        app.listen(port,(req,res)=>{
            console.log('Server listening on port ',port,'...')
        })
    }
    catch(error){
        console.log(error);
    }
}
startServer();


