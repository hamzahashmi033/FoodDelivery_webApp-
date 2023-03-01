import app from './app.js'
import {connectDB} from './config/database.js'
connectDB()
app.get("/",(req,res,next)=>{
    res.send("<h1>Hello World...</h1>")
})
app.listen(process.env.PORT , ()=>{
    console.log("Server is running on port " + process.env.PORT + " and in "+  process.env.NODE_ENV + " mode")
})