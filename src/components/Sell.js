import React from "react";
// import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{color:"white", textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button  variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
     
      
      
    <Form onSubmit={handleSubmit} style={{width:"100%", height:"40vh"}}> 
    <Form.Group >
      <Form.Label><b style={{color:"white"}}>Add Things That You want to Sell</b></Form.Label>
      <Form.Control type="text" className="input" value={value} style={{width:"70vw"}} onChange={e => setValue(e.target.value)} placeholder="Add new thing" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <hr />
  </Form>
  );
}

function Sell() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <>
     
      <Navbar/>
    <div className="app" style={{backgroundColor:"black", width:"100%" , height:"100vh"}}>
      <div className="container">
        <h1 className="text-center mb-4" style={{color:"white"}}>Selling Lister</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>

      </div>
      {/* <h2 style={{color:"white"  ,textAlign:"center"}}>"Convenience at the expense of the planet is not convenience at all"</h2> */}
    </div>
   
    </>
  );
}

export default Sell;