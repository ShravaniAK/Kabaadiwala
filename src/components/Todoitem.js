import React from 'react'
import { Todos } from './Todos'
import './todos.css'

export const Todoitem = ({todo, onDelete}) => {
  return (
    <div className='todos'>
    <h4>{todo.title}</h4>
    
    <p>{todo.desc}</p>
    <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>

  )
}
