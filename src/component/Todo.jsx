import React ,{useEffect , useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import  CartContext  from '../Invoice/InvoiceContext/invoiceContext';
import { useContext } from 'react';

function Todo() {
  const {id} = useParams();
  const [TodoDetails, SetTodoDetails] = useState({});

  // const {name} = useContext(CartContext);
  // console.log(name)
  console.log("*************")

  useEffect(() => {
    axios.get(`http://localhost:8000/api/todos/${id}`).then((res) => {
      const responseTodo = res.data;
      SetTodoDetails(responseTodo);  
    })
  }, [])



  console.log(TodoDetails ,"hellooo ");
  const {userId , title , completed}= TodoDetails ?.todoss ? TodoDetails?.todoss:TodoDetails;
  console.log(title);
  
  return (
    <div>
      <h1>{`UserID : ${userId}`}</h1>
      <h1>{`Title : ${title}`}</h1>
      <h1>{`IsCompleted : ${completed}`}</h1>
    </div>
  )
}

export default Todo;