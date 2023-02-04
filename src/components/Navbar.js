import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="logo">
        <h1>Kabaadiwala</h1> 
     </div>
     <div className="side">
         <ul>
            <li> <Link to="/Home">HOME</Link></li>
            <li> <Link to="/Donate">DONATE</Link></li>
             <li><Link to="/Sell">SELL</Link></li>
            <li> <Link to="/Dump">DUMP</Link></li>
             <li><Link to="/Report">REPORT</Link></li>
            <li> <Link to="Contact">Contact US</Link></li>
         </ul>
     </div>
    </div>
  )
}
