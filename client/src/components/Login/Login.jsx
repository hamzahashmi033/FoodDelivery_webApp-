import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { motion } from "framer-motion"
import toast from "react-hot-toast"

const Login = () => {
    const loginHandler = async() =>{
        window.open("http://localhost:4000/api/v1/googlelogin","_self")
    }
    return (
        <>
        <motion.div initial={
                {
                    y: "-100vh",
                    opacity: 0
                }
            } 
            animate={{
                y: "0",
                opacity: 1
            }}
                transition={{ delay: 0.5 }}
                className='loginSection'>
                <button onClick={loginHandler}>Login With <FcGoogle /></button>
            </motion.div>
        </>
    )
}

export default Login
