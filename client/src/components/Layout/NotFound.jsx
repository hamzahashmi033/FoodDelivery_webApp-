import React from 'react'
import {MdError} from "react-icons/md"
import {Link} from "react-router-dom"
const NotFound = () => {
  return (
    <>
    <div className='notFound'>
        <MdError/>
        <h1>Error 404</h1>
        <p>Page not found.Click below to go to Home page.</p>
        <Link to="/">Go to Home</Link>
    </div>
    </>
  )
}

export default NotFound
