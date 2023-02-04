// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import  Sell  from './components/Sell';
// import { Navbar } from './components/Navbar';
import  Dump  from './components/Dump';

import { BrowserRouter , Routes, 
  Route, } from "react-router-dom";
import {Donate } from './components/Donate';
import  Report  from './components/Report';
import  Contact  from './components/Contact';
import  Monatary  from './components/Monatary';
import NonM from './components/NonM';

function App() {
  return (
   <>
   
   
   <BrowserRouter>
        <Routes>
         
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Home" element={<Home/>} />
            
          
          <Route path="/Sell" element={<Sell/>} />
          <Route exact path="/Donate" element={<Donate/>} />
          <Route exact path="/Dump" element={<Dump/>} />
         
          <Route exact path="/Report" element={<Report/>} />
          
          
           <Route path="/Contact" element={<Contact/>} />
           <Route path="/Monatary" element={<Monatary/>} />
           <Route path="/NonM" element={<NonM/>} />
            
          
          
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
