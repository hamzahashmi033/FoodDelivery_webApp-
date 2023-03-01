import React from 'react'
import {motion} from 'framer-motion'
const Menu = ({itemNo,img,price,title,delay=0}) => {
  return (
    <>
       <motion.div className='burgerCart'
       initial={{x:"-100%",opacity:0}}
       whileInView={{x:"0",opacity:1}}
       transition={{delay:delay}}
       >
          <p>Item {itemNo}</p>
          <img src={img} alt='1' width={300} height={250} />
          <h1>Rs {price}</h1>
          <h3>{title}</h3>
          <button>Buy Now</button>
        </motion.div>
    </>
  )
}

export default Menu
