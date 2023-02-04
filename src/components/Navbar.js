// import React from 'react';
import './navbar.css';
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div className='navbar'>
//      <div className="logo">
//          <img src={require("../imgs/kklogo.jpeg")} alt="" />
//         <h1>Kabaadiwala</h1> 
//      </div>
//      <div className="side">
//          <ul>
//             <li> <Link to="/Home">HOME</Link></li>
//             <li> <Link to="/Donate">DONATE</Link></li>
//              <li><Link to="/Sell">SELL</Link></li>
//             <li> <Link to="/Dump">DUMP</Link></li>
//              <li><Link to="/Report">REPORT</Link></li>
//             <li> <Link to="/Contact">Contact US</Link></li>
//          </ul>
//      </div>
//     </div>
//   )
// }
import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import easterEgg from './easterEgg'


export default function Navbar({ pageTitle, description }) {
  
  const [wid, setWid] = React.useState('')
  const openNav = () => setWid('100%')
  const closeNav = () => setWid('0%')
  
  useEffect(()=>{
    console.log(easterEgg, "font-family:monospace");
  }
  ,[]);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>Kabaadiwala</title>
      </Head>

      <header>
        <Link href="/"><img className="nav-img" draggable="false" src={require("../imgs/kklogo.jpeg")} alt="logo" /></Link>
        <div className="nav-title">kabaadiwala</div>
        <nav>
          <ul className="nav__links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Sell">Sell</Link>
            </li>
            <li>
              <Link href="/Dump">Dump</Link>
            </li>
            <li>
              <Link href="/Report">Report</Link>
            </li>
            <li>
              <Link href="/Donate">Donate</Link>
            </li>
            <li>
              <Link href="/Contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <p onClick={openNav} className="menu cta">Menu</p>
      </header>

      <div style={{ width: wid }} className="overlay">
        <a className="close" onClick={closeNav}>&times;</a>
        <div className="overlay__content">
          <Link href="/">Home</Link>
          <Link href="/Sell">Sell</Link>
          <Link href="/Dump">Dump</Link>
          <Link href="/Report">Report</Link>
          <Link href="/Donate">Donate</Link>
          <Link href="/Contact">contact us</Link>
        </div>
      </div>
    </React.Fragment>
  )
}