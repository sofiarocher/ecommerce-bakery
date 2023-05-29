import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='nav__container'>
        <h2 className='nav__logo'>Shop's Logo</h2>
        <ul className="nav__links">
          <Link to="/"><li className='nav__link'>Home</li></Link>
          <Link to="/"><li className='nav__link'>Our Cakes</li></Link>
          <Link to="/shop">
            <li>
                <button className='nav__button'>Shop Now</button>
            </li>
          </Link>
        </ul>
    </div>
  )
}

export default Navbar