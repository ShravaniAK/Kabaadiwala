import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
    let mystyle={
        minHeight:"50vh",
        margin:"40px auto",
        color:"white"
    }
    
  return (
    <div className='container' style={mystyle}>
        <h3 className='text-center my-3'>Reports</h3>
        {props.todos.length===0 ? "Nothing display" : 
        props.todos.map((todo)=>{
           return  <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        
    })
       }
       
       
    </div>
  )
}
