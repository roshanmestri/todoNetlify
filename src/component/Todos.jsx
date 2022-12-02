import React, { useEffect, useState } from 'react'

import { CircularProgress, Link } from "@material-ui/core"

import axios from "axios"
import TodoCard from '../component/TodoCard'
// import { useContext } from 'react'
import { todosContext } from '../contexts/TodosContext'
import {UseTodo} from "../contexts/TodosContext"
import { useNavigate } from 'react-router-dom'

function Todos() {
  const navigate = useNavigate();
  let {todos ,getTodosData} = UseTodo(); //has value =todos
  // const [todos, setTodos] = useState({})
  const [TodoForm , setTodoForm] = useState({
    title : "",
    userId : "",
    isCompleted : ""
  });
 console.log(todos);

  function handle(e){
    const newData = {...TodoForm};
    newData[e.target.id] = e.target.value;
    setTodoForm(newData)
    console.log(newData);
  }

  function Onsubmit(e){
    e.preventDefault();
    axios.post("http://localhost:8000/api/todos", {
      userId : TodoForm.userId,
      title : TodoForm.title,
      completed : TodoForm.isCompleted
    }).then(res => {
      console.log(res.data);
      getTodosData();
    })
  } 


  function getAll (){
    
  }

// console.log(TodoForm);
//   useEffect(() => {
//     axios.get('http://localhost:8000/api/todos').then((res) => {
//       const responseTodos = res.data; 
//       setTodos(responseTodos);
//     })  
//   }, []);

  return (
   <>
  <button onClick={() => navigate('/login')}>Sign In</button>
   
    <form action="/todos" method='POST' onSubmit={(e) => Onsubmit(e)} style={{marginTop:"70px"}}>
    <div>
         <label htmlFor="">Title</label>
        <input onChange={(e) => handle(e)} id="title" value={TodoForm.title} type="text" placeholder='title' /> <br />
    </div>

    <div>
         <label htmlFor="">User ID</label>
        <input onChange={(e) => handle(e)} id="userId" value={TodoForm.userId} type="text" placeholder='User Id' /> <br />
    </div>

    <div>
      <label htmlFor="isCompleted">True : </label>
      <input onChange={(e) => setTodoForm(prev=>({...prev,isCompleted:e.target.checked}))} value={TodoForm.isCompleted} id="isCompleted"   type="radio"  name='isCompleted' />

      <label htmlFor="isCompleted2">False</label>
      <input onChange={(e) => setTodoForm(prev=>({...prev, isCompleted:false}))}    type="radio" id="isCompleted" name='isCompleted' />
    </div>
    
    <button style={{border : "3px solid blue" ,
  margin:"20px"}}>Save</button>
      
  </form>
  { todos?.length ?
   (
   <div style={{display:"flex",flexWrap:"wrap" }}>
    {
    todos?.map(todo =>  <TodoCard todo ={todo}/>)
    }
  </div>

   )
    :
    <CircularProgress/>}
   
   </>
  );
}

export default Todos


 
// import axios from "axios";
// import React, {useState , useEffect} from "react";

// function Todos(){
//   const [todoData , setTodoData] = useState([]);
//   useEffect(() =>{
//     // fetch("http://localhost:8000/api/todos").then((res) =>{
//     //   res.json().then((resp)=>{
//     //     console.warn("result" , resp);
//     //     setTodoData(resp)
//     //   })
//     // })
//     axios.get("http://localhost:8000/api/todos").then(res=>console.log(res.data))
//   }, [])
//   console.warn(todoData)
 
//   return(
//     <div>
//       <h1>Get API Call</h1>
//     </div>
//   )
// }

// export default Todos;





// import React, { useState } from 'react'

// import todo from '../assets/images.png'

// function Todos() {

//   const [inputData, setInputData] = useState('');
//   const [items, setItem] = useState([])

//   const addItem = () => {
//     if (!inputData) {

//     }
//     else {
//       setItem([...items, inputData])
//       setInputData('')
//     }
//   }

//   const deleteItem  =(id) =>{
//     const updatedItems= items.filter((elm , ind ) => {
//       return ind !== id
//     });
//     setItem(updatedItems)
//   }

// const removeAll =() =>{
//   setItem([])
// }

//   console.log(items);
//   return (
//     <div className='main-div'>
//       <div className='child-div'>
//         <figure>
//           <img src={todo} alt="" />
//           <figcaption>Add your list here</figcaption>

//           <div className='addItems'>
//             <input type="text" placeholder='add Items ...'
//               value={inputData} onChange={(e) => setInputData(e.target.value)}
//             />
//             <i className="fa-sharp fa-solid fa-plus" title='add item' onClick={addItem}></i>
//           </div>

//           <div className='showItems'>
//             {
//               items.map((elm, ind) => {
//                 return (
//                   <div className='eachItem' key={ind}>
//                     <h3 style={{ display: "inline", marginRight: "300px", backgroundColor: "purple", color: "white" }}>{elm}</h3>
//                     <i className="far fa-trash-alt add btn" title='Delete item' onClick={() => deleteItem(ind)}></i>
//                   </div>

//                 )

//               })

//             }

//           </div>

//           <div className='showItems'>
//             <button className=' btn ' onClick={() => removeAll()}> <span> CHECK LIST</span></button>
//           </div>
//         </figure>
//       </div>
//     </div>
//   )
// }


// export default Todos
