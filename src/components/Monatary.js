import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import './monatary.css'
import Navbar from './Navbar';

export default function Monatary() {
  return (
      <>
     <Navbar/>
    <form className='justify-content-center' style={{width:"60vw", display:"flex", flexDirection:"column", justifyContent:"center" , alignItems:"center" , marginTop:"10vh", marginLeft:"20vw"}}>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput className="w-50 p-3" wrapperClass='mb-4' id='form6Example3' label='Company name' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />
      {/* <MDBInput wrapperClass='mb-4' label="Amount"/> */}

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Revel Your Name?'
        defaultChecked
      />

      <MDBBtn style={{width:"5vw"}}  type='submit' block>
        Submit
      </MDBBtn>
    </form>
    </>
  );
}