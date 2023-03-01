import React from 'react'
import {Link} from "react-router-dom"

const OrderSuccess = () => {
  return (
    <>
    <div className='orderSuccess'>
        <h1>Order Confirmed</h1>
        <p>Your Order has been placed Successfully. You can click below to check order Status.</p>
        <button><Link to="/myorders">Order Status</Link></button>
    </div>
    </>
  )
}

export default OrderSuccess
