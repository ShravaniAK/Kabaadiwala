import React from 'react';
import './home.css'
import { Navbar } from './Navbar';

export const Home = () => {
  return (
      <>
      <Navbar/>
   <div className="home">
       
       <div className="left">
          <img src={require("../imgs/klogo.jpeg")} alt="" />
       </div>
       <div className="right"></div>
   </div>
   </>
  )
}
