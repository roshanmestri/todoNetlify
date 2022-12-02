
import React from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { UseTodo } from '../contexts/TodosContext';

const TodoCard = (props) =>{
    const { todo } = props;
  let {getTodosData} = UseTodo(); //has value =todos

    const {_id, title , completed} = todo;
    const navigate = useNavigate();

    const deleteTodo = ( e, _id ) =>{
        e.preventDefault();
        // 192.168.1.54:8000 IP
        axios.delete(`http://localhost:8000/api/todos/${_id}`)
        .then((res)  => {
          console.log("deleted" , res )
          getTodosData()
        })
        .catch((err) => console.log(err));
      }

    return (
      <>
        <div style={ {backgroundColor: "grey" ,
         margin: "10px" ,
          padding: '15px',
           width: '150px' }}  onClick={() => navigate(`/todo/${_id}`)}>
          <h4> {title} </h4>
          <h6> {` completed ${completed}`}</h6>
         
          {/* <button onClick={() => navigate(`/todos/${_id}`)}>view Todo</button> */}
        </div>
        <button onClick={(e) => deleteTodo(e, _id )} ><i class="fa-solid fa-trash-can"></i>Delete</button>
        </>
        
      )
}

export default TodoCard

// import React,{useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Todos from './Todos';


// const TodoCard = (props) =>{
//     const { todo } = props;
//     console.log(todo, "######");
//     const {_id , title , completed} = todo;
//     const navigate = useNavigate();
// console.log(_id);
// const deleteTodo = ( e, id ) =>{
//   console.log("###########!" , id);
//   e.preventDefault();
//   // 192.168.1.54:8000 IP
//   axios.delete(`http://192.168.1.54:8000/api/todos/${id}`)
//   .then((res)  => {
//     console.log("deleted" , res )
//   })
//   .catch((err) => console.log(err));
//   Todos()
// }
//     return (
//       <>
//         <div style={ {backgroundColor: "grey" ,
//          margin: "10px" ,
//           padding: '15px',
//            width: '150px',
//            }} >
      
//           <button onClick={() => navigate(`/todos/${_id}`)}>view Todo</button>
//           <h4> HELLO </h4>
//           <h6> HELLOO</h6>
//             <button onClick={(e) => deleteTodo(e, _id )} ><i class="fa-solid fa-trash-can"></i>Delete</button>
         
//         </div>
       
//         </>
//       )
// }

// export default TodoCard