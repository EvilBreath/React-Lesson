import React from 'react'
import './style.css';
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footerContainer' id='footer'>
        <ul>
            <li><Link to="/">Logo</Link></li>
            <li className='right'><a className='active'>Made by Alex</a></li>
          </ul>
      </div>
    </div>
    </>

   
  )
}


export default Footer;