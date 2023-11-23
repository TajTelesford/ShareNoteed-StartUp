import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
       <div className='' >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className='collapse navbar-collapse justify-content-center'>
                <ul className='navbar-nav d-mx-auto '>
                    <li className='nav-item mr-lg-5 mr-sm-5 '>
                        <Link to={"/home"} >Homepage</Link>
                    </li>
                    <li className='nav-item mr-lg-5 mr-sm-5 '>
                        <Link to={"/home/dashboard"} >Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
  )
}

export default NavBar