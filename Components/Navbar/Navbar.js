import React, { useContext, useState } from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import "./Navbarstyle.css"
import { DataContext } from '../Context/ContextAPI'

const Navbar = () => {

  const {name} = useContext(DataContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/Home");
    sessionStorage.clear();
  }
  
  return (
    <nav>
      <Link className='title' to="/Home">Home</Link>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/About">About</NavLink> 
          </li>
        <li>
          <NavLink to="/Service">Services</NavLink>
          </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>{name}Logout</button>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
