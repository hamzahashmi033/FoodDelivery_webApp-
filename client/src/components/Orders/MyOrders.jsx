import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineEye} from "react-icons/ai"
const MyOrders = () => {
    const arr = [1,2,3,4]
    return (
        <>
        <div className='tableClass'>
            <main>
            <h1>My Orders</h1>
                <table>
                    <thead>
                        <th>Product Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Mehtod</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                       {
                        arr.map(i=>(
                            <tr>
                            <td>02809284</td>
                            <td>Processing</td>
                            <td>4</td>
                            <td>Rs : {3232}</td>
                            <td>COD</td>
                            <td><Link to={`/orderdetails`}><AiOutlineEye/></Link></td>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </main>
        </div>
        </>
    )
}

export default MyOrders
