import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import './donate.css'



export const Donate = () => {

   
  return (
   <>
   <Navbar/>
   <div className="donate">

   
   <h1>
In which mode do you want to donate ? 
   </h1>
   <div className="btns">
       <button><Link to="/Monatary">I want DoorStep Donation</Link></button>
       <button><Link to="/NonM">I will go to Donate</Link></button>
   </div>
   </div>
   </>
  )
}
