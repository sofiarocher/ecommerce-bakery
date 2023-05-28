import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='nav__container'>
        <h2 className='nav__logo'>Shop's Logo</h2>
        <ul className="nav__links">
            <li className='nav__link'>Home</li>
            <li className='nav__link'>Our Cakes</li>
            <li className="nav__link">
                <button className='nav__button'>Shop Now</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar