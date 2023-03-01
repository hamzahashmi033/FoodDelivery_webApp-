import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import { connectPassport } from './Utils/provider.js'
import session from 'express-session'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import  cors from "cors"
const app = express()
dotenv.config({
    path : "./config/config.env"
})

connectPassport()

// using middleeare
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL
}))
// app.enable("trust proxy")
app.use(cookieParser())
app.use(express.json())
app.use(urlencoded({
    extended:true
}))
app.use(session({
    secret:"affakfnsvfiavdiyfsf",
    resave:false,
    saveUninitialized:false,
    // cookie:{
    //     secure:process.env.NODE_ENV === "development"? false : true,
    //     httpOnly:process.env.NODE_ENV === "development"? false : true,
    //     sameSite:process.env.NODE_ENV === "development"? false : "none",
    // }
}))
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
// importing routes
import userRoutes from './Routees/User.js'
import Order from './Routees/Order.js'
// import { cookie } from 'express/lib/response.js'

app.use("/api/v1",userRoutes)
app.use("/api/v1",Order)

export default app;