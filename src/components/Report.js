// import logo from './logo.svg';
import { useState,useEffect } from 'react';
// import './App.css';
import { Addtodo}  from './Addtodo';
import Navbar from './Navbar';
// import { Footer } from './components/Footer';
// import Header from './components/Header';
import { Todos } from './Todos';

function Report() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addtodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  
  return (
    <>
    {/* <Header title="myTodoList"/> */}
    <Navbar/>
    <Addtodo  addtodo={addtodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    {/* <Footer/> */}

    </>
  );
}

export default Report;
