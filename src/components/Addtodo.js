import React, { useState } from 'react'

export const Addtodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title || !desc){
    alert("cannot be blank");
}

props.addtodo(title,desc);
    }
  return (
    <div style={{height:"30vh", fontSize:"2rem"}} className='containerr'>
        <h1>Report</h1>
        <form onSubmit={submit}>
  <div style={{width:"50vw"}}>
    <label for="title" style={{width:"40vw", margin:"2rem"}} className="form-label">Name</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
   
  </div>
  <div  style={{width:"50vw"}}>
    <label for="desc" style={{width:"100%", margin:"2rem"}}  className="form-label">Address ( place which needs to be cleaned )</label>
    <input type="text" className="form-control" onChange={(e)=>{setDesc(e.target.value)}} value={desc} id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}
