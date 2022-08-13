import React from 'react'
import './style.css';
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className='header'>
      <div className='headerContainer' id='header'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/api">Api</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li className='right'><a className='active'>Coming soon</a></li>
          </ul>
      </div>
    </div>

    <div className='container'>
      <Outlet />
    </div>
    </>

   
  )
}


export default Header;