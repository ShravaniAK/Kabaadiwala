// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Sell } from './components/Sell';
import { Navbar } from './components/Navbar';
import { Dump } from './components/Dump';

import { BrowserRouter , Routes, 
  Route, } from "react-router-dom";
import { Donate } from './components/Donate';
import { Report } from './components/Report';
import { Contact } from './components/Contact';

function App() {
  return (
   <>
   
   
   <BrowserRouter>
        <Routes>
         
          <Route exact path="/" element={<Home />} />
            
          
          <Route path="/Sell" element={<Sell/>} />
          <Route path="/Donate" component={Donate} />
          <Route path="/Dump" component={Dump} />
          <Route path="/Sell" component={Sell} />
          <Route path="/Report" component={Report} />
          <Route path="/Contact" component={Contact} /> 
            
          
           <Route path="/contactus" component={Contact} />
            
          
          
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
