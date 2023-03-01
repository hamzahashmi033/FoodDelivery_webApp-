import React, { useState } from 'react'
import {Link} from "react-router-dom"
const ConfirmOrder = () => {
   const [cod,setCod] =useState(false)
   const [online,setOnline] =useState(false)
   const  isChecked = ()=>{
    if(cod === false){
        setCod(true)
        setOnline(false)
    }else{
        setCod(false)
        setOnline(true)
    }
   }
  return (
  <>
  <div className='paymentMehtod'>
    <h1>Payment Mehtod</h1>
    <div className='paymentParent'>
        <div>
            <h3>Cash On Delivery</h3>
            <input type="checkbox" value="COD"
            checked={cod}
            onChange={isChecked}
            
         />
        </div>
        <div>
            <h3>Online</h3>
            <input type="checkbox" 
            value="Online" 
            name='payment'
             checked={online}
             onChange={isChecked}
            />
        </div>

    </div>
    <button><Link to="/ordersuccess">Place Order</Link></button>
  </div>
  </>
  )
}

export default ConfirmOrder