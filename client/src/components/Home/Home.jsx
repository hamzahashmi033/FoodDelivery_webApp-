import React from 'react'
// import {Link} from "react-router-dom"
import {motion}  from "framer-motion"
import Menu from './Menu'
import Burger from "../../assets/burger1.png"
import Burger2 from "../../assets/burger2.png"
import Burger3 from "../../assets/burger3.png"

const Home = () => {
  return (
    <>
     <section className='home'
        >
            <div>
                <motion.h1 initial={{x:"-100%",opacity:0}}
            whileInView={{x:"0",opacity:1}}
            >MBA BURGERWALA</motion.h1>
                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{
                    delay:0.2
                    }}
                >Taste that you Liked.
                </motion.p>
            </div>
            <motion.a href="#menu"
            initial={{y:"-100%",opacity:0}}
            whileInView={{y:"0",opacity:1}}
            transition={{
                delay:0.2
            }}>Explore Menu</motion.a>
        </section>
        <div className="menuhead" id='menu'>
            <motion.h1 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay:0.2}}
            >Menu</motion.h1>
        </div>
        <div className='menuCarddFlex'>
        <Menu itemNo="01" img={Burger} price="800" title="Chicken Burger" delay={0.3}/>
        <Menu itemNo="02" img={Burger2} price="800" title="Chicken Burger" delay={0.5}/>
        <Menu itemNo="03" img={Burger3} price="800" title="Chicken Burger" delay={0.8}/>
        </div>
    </>
      
 
  )
}

export default Home
