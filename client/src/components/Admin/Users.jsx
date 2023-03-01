import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineEye} from "react-icons/ai"
import profile1 from "../../assets/profile1.webp"
const Users = () => {
    const arr = [1,2,3,4]
  return (
    <>
     <div className='tableClass'>
            <main>
            <h1>ALL USERS</h1>
                <table>
                    <thead>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                       {
                        arr.map(i=>(
                            <tr>
                            <td>02809284</td>
                            <td>Hamza hashmi</td>
                            <td><img src={profile1} alt="me"/></td>
                            <td>User</td>
                            <td>{"23-12-2022"}</td>
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

export default Users
