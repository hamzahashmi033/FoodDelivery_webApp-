import { Order } from '../Models/orderModels.js';
import {User} from '../Models/userModels.js'
export const myProfile = (req,res,next)=>{
    res.status(200).json({
        success:true,
        user:req.user
    });
};
export const logOut = (req,res,next)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.send(err)
        }
        res.clearCookie("connect.sid",{
            secure:process.env.NODE_ENV === "development"? false : true,
            httpOnly:process.env.NODE_ENV === "development"? false : true,
            sameSite:process.env.NODE_ENV === "development"? false : "none",
        })
        res.status(200).json({
            message : "LoggedOut"
        })
    })
} 
export const getAdminUsers = async(req,res,next) =>{
    const users = await User.find({})
    res.status(200).json({
        success:true,
        users
    })
}

export const getAdminStats = async(req,res,next) =>{
   try {
    const userCount = await User.countDocuments();;
    const orders = await Order.find({});

    const preparingOrders = orders.filter(i=> i.orderStatus === "Preparing")
    const shippedOrders = orders.filter(i=> i.orderStatus === "Shipped")
    const deliveredOrders = orders.filter(i=> i.orderStatus === "Delivered")

    let totalIncome = 0
    orders.forEach(element => {
        totalIncome += element.totalPrice
    });
    res.status(200).json({
        success:true,
        userCount,
        ordersCount:{
            total:orders.length,
            preparingOrders:preparingOrders.length,
            shippedOrders:shippedOrders.length,
            deliveredOrders:deliveredOrders.length
        },
        totalIncome
    })
   } catch (error) {
    console.log(err)
   }
}