import "./App.css";
import React, { useState } from "react";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";


function App() {
  const onDelete = (todo) => {
    console.log(" I am OnDelete of todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    // add new todo 
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      sno: 3,
      title: "Go to the work",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);
  return (
    <>
      {/* <Header title="MyTodosList" SearchBar={false}/> */}
      <Header title="MyTodosList" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
