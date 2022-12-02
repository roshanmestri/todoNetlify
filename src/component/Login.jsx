import React from 'react'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
import { UseTodo } from '../contexts/TodosContext';

function Login() {
  let {user ,SetUser} = UseTodo();
  const navigate = useNavigate();
  const [LoginState , setLoginState] =useState({
    email : "",
    password : "",
      // login: false,
      // token : ""
  });

  function handler(e){
    const newData = {...LoginState};
    newData[e.target.id] = e.target.value;
    setLoginState(newData)
    console.log(newData , "######");
  }

  function Onsubmit(e){
    e.preventDefault();
    axios.post("http://localhost:8000/api/login", {
      email : LoginState.email,
      password : LoginState.password
    }).then(res => {
      SetUser(res.data.user);
      console.log(user ,"*****");

      })
   
    navigate('/profile');
  } 
  return (
    <div>

      {/* <div>
        <form action="" onSubmit={(e) => Onsubmit(e)}>
          <input type="text" placeholder="email" id="email" value={LoginState.email} onChange={(e) => handler(e)}/>
          <input type="text" placeholder="Password" id="password" value={LoginState.password} onChange={(e) => handler(e)} />
          <button  type="submit">Login</button>
        </form>
      </div> */}

<form  onSubmit={(e) => Onsubmit(e)}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"  placeholder="email" id="email" value={LoginState.email} onChange={(e) => handler(e)}
            
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password" id="password" value={LoginState.password} onChange={(e) => handler(e)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" >
            Submit
          </button>
        </div>
        <span>New User ?<Link to="/register">Create New</Link></span>
      </form>
    </div>
  )
}

export default Login