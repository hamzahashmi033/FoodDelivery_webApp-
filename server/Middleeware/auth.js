export const isAuthenticated = (req,res,next) =>{
    const token = req.cookies["connect.sid"]
  
    if(!token){
        return res.status(400).json({
            message : "Login to access this ressource"
        })
    }
    next();
}
export const authoriseAdmin = (req,res,next) =>{
    if(req.user.role != "admin"){
       return res.status(400).json({
            message :"Only Admin Allowed"
        })
    }
    next()
}