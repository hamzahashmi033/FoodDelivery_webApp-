import React from 'react';
import Profile1 from "../../assets/profile1.webp";
import {Link,useNavigate} from "react-router-dom" ;
import { logoutUser } from '../../Action/userAction';
import {useDispatch} from "react-redux"
import toast from 'react-hot-toast';


const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = () =>{
    dispatch(logoutUser())
    toast.success("Logout Successfully")
    // navigate("/")
  }
  return (
   <>
   <div className='profileSection'>
        <div className='profileParent'>
                <img src={Profile1} alt="" />
                <h1>Hamza Hashmi</h1>
                <button><Link to="/dashboard">DASHBOARD</Link></button>
                <button><Link to="/myorders">MY ORDERS</Link></button>
                <button onClick={logoutHandler}>LOGOUT</button>
        </div>

   </div>
   </>
  )
}

export default Profile
