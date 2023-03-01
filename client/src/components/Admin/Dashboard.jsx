import React from 'react'
import {Doughnut} from "react-chartjs-2"
import {Chart as Chartjs,Tooltip,ArcElement,Legend} from "chart.js"
import {Link} from "react-router-dom"
Chartjs.register(Tooltip,ArcElement,Legend)
const Dashboard = () => {
    const data = {
        labels: ["Preparing","Shipped","Delivered"],
        datasets:[
            {
                label : "# of Orders",
                data:[2,3,5],
                backgroundColor:[
                    "rgba(159,63,176,0.1)",
                    "rgba(78,63,176,0.2)",
                    "rgba(156,0,60,0.3)",
                ],
                borderColor:[
                    "rgba(159,63,176)",
                    "rgba(78,63,176)",
                    "rgba(156,0,60)",
                ],
                borderWidth:1
            }
        ]
    }
  return (
   <>
   <div className='dahsboardSection'>
    <div className='subSection'>
        <div className='records'>
            <div>
                <h1>343</h1>
                <p>USERS</p>
            </div>
            <div>
                <h1>500</h1>
                <p>ORDERS</p>
            </div>
            <div>
                <h1>Rs :10000</h1>
                <p>INCOME</p>
            </div>
        </div>
        <div className='doughnut'>
            <Doughnut 
             data={data}
             />
             <div>
           <Link to="/admin/orders"> View Orders </Link>
            <Link to="/admin/users"> View Users </Link>
             </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Dashboard
