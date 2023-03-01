import React from 'react'

const Contact = () => {
  return (
    <section className='contactSecion'>
        <form>
            <h1>Contact Us</h1>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <textarea cols="30" rows="20" placeholder='Message...'></textarea>
            <input type="Submit" value="Send" />
        </form>
    </section>
  )
}

export default Contact
