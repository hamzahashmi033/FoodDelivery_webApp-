import React from 'react'
import Burger from "../../assets/burger1.png"
import Burger2 from "../../assets/burger2.png"
import Burger3 from "../../assets/burger3.png"
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'


const CartItems = ({ value, title, img, increment, decrement }) => {
  return (
    <>
      <div className="cartParent">

        <div className='cartItems'>
          <div>
            <motion.h2  
            initial={{x:"-200%"}}
            whileInView={{x:"0%"}}
            >{title}</motion.h2>
            <motion.img 
            initial={{x:"-200%"}}
            whileInView={{x:"0"}}
            
            src={img} alt="1" 
            />
          </div>
          <motion.div className='quantiity'
          initial={{x:"200%"}}
          whileInView={{x:"0"}}>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value} />
            <button onClick={increment}>+</button>
          </motion.div>
        </div>
      </div>
    </>
  )
}
const Cart = () => {
  const increment = (item) => { }
  const decrement = (item) => { }
  return (
  <>
    <section className='cart'>
      <CartItems
        title="Chicken Burger"
        value={0}
        img={Burger}
        increment={() => increment(1)}
        decrement={() => decrement(1)}
      />
      <CartItems
        title="Chicken Cheese Burger"
        value={0}
        img={Burger2}
        increment={() => increment(1)}
        decrement={() => decrement(1)}
      />
      <CartItems
        title="Chicken Burger with fries  "
        value={0}
        img={Burger3}
        increment={() => increment(1)}
        decrement={() => decrement(1)}
      />
    </section>
    <section className='priceSection'>
      <motion.div
      initial={{x:"-200%"}}
      whileInView={{x:"0%"}}>
        <h3>Sub Total</h3>
        <h3>Tax</h3>
        <h3>Deliverey Charges</h3>
        <h3>Total</h3>
     </motion.div>
     <motion.div
      initial={{x:"200%"}}
      whileInView={{x:"0"}}>
        <p>RS: 200</p>
        <p>RS: 800</p>
        <p>RS: 200</p>
        <p>RS: 5000</p>
        <button><Link to="/shipping">Checkout</Link></button>
     </motion.div>

    </section>
  </>
  )
}

export default Cart
