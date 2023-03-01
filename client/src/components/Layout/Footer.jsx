import React from 'react'
import Profile1 from "../../assets/profile1.webp"
import {AiFillInstagram,AiFillFacebook,AiFillLinkedin,AiFillGithub} from "react-icons/ai"
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <>
    <motion.footer
    initial={{y:"200",opacity:0}}
    whileInView={{y:"0",opacity:1}}
    transition={{delay:0.3}}
    >
    
        <div>
            <h1>MBA BurgerWala</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum, alias magni earum aspernatur provident libero accusantium officia at quibusdam laborum ullam, voluptate quasi. Soluta nisi blanditiis libero eos repudiandae.</p>
        </div>
        <div className='testimonialSection'>
            <div>
                <h1>Developed By :</h1>
                <img src={Profile1} alt="1"/>
                <h3>Hamza Hashmi</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, totam?</p>
                <div className="socialHandles">
                <a href="/das"><AiFillInstagram/></a>
                <a href="/das"><AiFillLinkedin/></a>
                <a href="/das"><AiFillFacebook/></a>
                <a href="/das"><AiFillGithub/></a>
                </div>
                <p className='lightCopy'>©All right reversed @Gaint's dev </p>

            </div>
        </div>
        <div className='emailSection'>
            <h1>Let's Connect !</h1>
            <input type="text" placeholder='Type your E-mail here...'/>
            <button>Join</button>
        </div>
    </motion.footer>
    </>

  )
}

export default Footer
