import express from 'express'
// import { isAuthenticated } from '../Middleeware/auth.js';
import { createOrder, getAdminOrder, getMyorders, getOrderDetails, proccessOrder } from '../Controllers/orderController.js';
import { authoriseAdmin, isAuthenticated } from '../Middleeware/auth.js';

const router  = express.Router()

router.post("/createorder",isAuthenticated,createOrder)
// router.post("/online/payment",isAuthenticated,onlinePayment)
router.get("/myOrders",isAuthenticated,getMyorders)
router.get("/order/:id",isAuthenticated,getOrderDetails)

// admin routes
router.get("/admin/orders",isAuthenticated,authoriseAdmin,getAdminOrder)
router.get("/admin/order/:id",isAuthenticated,authoriseAdmin,proccessOrder)

export default router;