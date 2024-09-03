import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <p>
        <Link to='/'>Home</Link>
        </p>
        <p>
        <Link to='/reactquery'>UseEffect</Link>
        </p>
        <p>
        <Link to='/traditional'>ReactQuery</Link>
        </p>
        <p>
        <Link to='/react-query-learning'>Main Page</Link>
        </p>
    </div>
  )
}

export default Navbar
