import React, { useEffect, useState } from "react";

import { CircularProgress, Link } from "@material-ui/core";

import axios from "axios";
import TodoCard from "../component/TodoCard";
import { todosContext } from "../contexts/TodosContext";
import { UseTodo } from "../contexts/TodosContext"
import { useNavigate } from "react-router-dom";
import { Navbar, Row } from "react-bootstrap";
import styled from "styled-components";

function Todos() {
  const navigate = useNavigate();
  let { todos, getTodosData } = UseTodo(); //has value =todos
  // const [todos, setTodos] = useState({})
  const [TodoForm, setTodoForm] = useState({
    title: "",
    userId: "",
    isCompleted: "",
  });
  console.log(todos);

  function handle(e) {
    const newData = { ...TodoForm };
    newData[e.target.id] = e.target.value;
    setTodoForm(newData);
    console.log(newData);
  }

  function Onsubmit(e) {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        userId: TodoForm.userId,
        title: TodoForm.title,
        completed: TodoForm.isCompleted,
      })
      .then((res) => {
        console.log("helllo roshan", res.data);
        getTodosData();
      });
  }

  function getAll() {}

  // console.log(TodoForm);
  //   useEffect(() => {
  //     axios.get('http://localhost:8000/api/todos').then((res) => {
  //       const responseTodos = res.data;
  //       setTodos(responseTodos);
  //     })
  //   }, []);

  return (
    <>
      {/* <button onClick={() => navigate('/login')}>Sign In</button> */}
     <Navbar style={{display:"flex" ,justifyContent:"center" ,fontWeight:"700px" , fontSize:"3rem" ,backgroundColor:"lightBlue"}}>Todolist React app</Navbar>
      <form
        action="/todos"
        method="POST"
        onSubmit={(e) => Onsubmit(e)}
        style={{ marginTop: "70px" }}
      >
        <div>
          <label htmlFor="">Title</label>
          <input
            onChange={(e) => handle(e)}
            id="title"
            value={TodoForm.title}
            type="text"
            placeholder="title"
          />{" "}
          <br />
        </div>

        <div>
          <label htmlFor="">User ID</label>
          <input
            onChange={(e) => handle(e)}
            id="userId"
            value={TodoForm.userId}
            type="text"
            placeholder="User Id"
          />{" "}
          <br />
        </div>

        <div>
          <label htmlFor="isCompleted">True : </label>
          <input
            onChange={(e) =>
              setTodoForm((prev) => ({
                ...prev,
                isCompleted: e.target.checked,
              }))
            }
            value={TodoForm.isCompleted}
            id="isCompleted"
            type="radio"
            name="isCompleted"
          />

          <label htmlFor="isCompleted2">False</label>
          <input
            onChange={(e) =>
              setTodoForm((prev) => ({ ...prev, isCompleted: false }))
            }
            type="radio"
            id="isCompleted"
            name="isCompleted"
          />
        </div>

        <button style={{ border: "3px solid blue", margin: "20px" }}>
          Save
        </button>
      </form>
      {todos?.length ? (
         <div >
         <List className="mt-3 row">
             {todos.map((todo) => (
                 <TodoCard todo={todo} />
             ))}
         </List>
     </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
const List = styled(Row)`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin: 0 0 1rem 2rem;
  margin:0 ;
  padding: 0 3rem;
`
export default Todos;

