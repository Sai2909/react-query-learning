import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Nav'

const Home = () => {
  return (
    <div>
        <Navbar/>
      <p className='footer'>Developed by <Link to='https://medium.com/@saikiranmanchala2000'>Sai Manchala</Link></p>
    </div>
  )
}

export default Home
