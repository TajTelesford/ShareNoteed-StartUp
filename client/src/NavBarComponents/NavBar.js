import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav d-inline-flex '>
                    <li className='nav-item'>
                        <Link to={"/"} >Homepage</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/"} >Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
  
  )
}

export default NavBar