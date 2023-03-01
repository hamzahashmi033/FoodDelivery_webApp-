import { Order } from "../Models/orderModels.js"
// import Stripe from 'stripe'
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const createOrder =async (req,res,next)=>{
    try {
    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalPrice

    } = req.body

    // const user = req.user._id

    const orderOptions={
        shippingInfo,
        orderItems,
        // user,
        paymentMethod,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalPrice,
    }
    if (order.paymentMehtod === "COD") {
        const order = await Order.create(orderOptions)
        res.status(200).json({
            success : true,
            message:"Order has been created successfully via COD",
            order
        })
    }
   
} catch (error) {
        console.log(error)
}
}

// export const onlinePayment = async(req,res,next)=>{
//     try {
        
//         const {
//             amount,
//             shippingInfo,
//             orderItems,
//             paymentMethod,
//             paymentInfo,
//             itemsPrice,
//             taxPrice,
//             shippingCharges,
//             totalPrice
    
//         } = req.body
//         const myPaymennt = stripe.PaymentIntents.create({
//             amount:amount,
//             currency:`usd`,
//         })
//         const user = req.user._id
    
//         const orderOptions={
//             shippingInfo,
//             orderItems,
//             user,
//             paymentMethod,
//             paymentInfo,
//             itemsPrice,
//             taxPrice,
//             shippingCharges,
//             totalPrice,
//         }
       
//         const order = await Order.create(orderOptions)
//         res.status(200).json({
//             success:true , client_secret : myPaymennt.client_secret, order
//         })
//     } catch (error) {
//      console.log(error)   
//     }
// }

export const getMyorders = async (req,res,next)=>{
    try {
    const orders =await Order.find({
        user:req.user._id
    }).populate("user","name")
    res.status(200).json({
        success:true,
        orders
    })
} catch (error) {
        console.log(error)
}
}
export const getOrderDetails = async (req,res,next)=>{
    try {
        
    
    const order = await Order.findById(req.params.id)
    if(!order){
       return res.status(404).json({
            message:"Invalid Order Id"
        })
    }
    res.status(200).json({
        success:true,
        order
    })
} catch (error) {
 console.log(error)       
}
}   
export const getAdminOrder = async (req,res,next)=>{
try {
    const orders = await Order.find({}).populate("user","name")
    res.status(200).json({
        success:true,
        orders
    })
} catch (error) {
    console.log(error)
}}

export const proccessOrder = async(req,res,next)=>{
    const order = await Order.findById(req.params.id)
    if(!order){
       return res.status(404).json({
            message:"Invalid Order ID"
        })
    }
    if(order.orderStatus === "Preparing"){
        order.orderStatus = "Shipped"
    }
    else if(order.orderStatus === "Shipped"){
        order.orderStatus = "Delivered"
        order.deliveredAt = new Date(Date.now())
    }
    else if(order.orderStatus === "Delivered"){
        return res.status(400).json({
            message : "Order Alerady Delivered"
        })
    }
    await order.save()
    res.status(200).json({
        success:true,
        message:"Order Status Updated Successfully"
    })
}
