import React, {useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function SignUpUser() {
    const navigate = useNavigate();
    const [SignUpData , SetSignUpData] = useState({
        name : "",
        email : "",
        password : ""
      });
      
      function handle(e){
        const newData = {...SignUpData};
        newData[e.target.id] = e.target.value;
        SetSignUpData(newData)
        console.log(newData);
      }

    function Onsubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", {
          name : SignUpData.name,
          email : SignUpData.email,
          password : SignUpData.password
        },{
          withCredentials:true
        }).then(res => {
          console.log(res.data);
          
          navigate('/login')
        })
      } 
  return (

    <div> 
        <form action="/register" method='POST' onSubmit={(e) => Onsubmit(e)} >
          <h1>Registration</h1>
            <div>
                <label htmlFor="">Name</label>
                <input onChange={(e) => handle(e)} id="name" value={SignUpData.name} type="text" placeholder='Name..' />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input onChange={(e) => handle(e)} id="email" value={SignUpData.email} type="email" placeholder='Enter email' />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input onChange={(e) => handle(e)} id="password" value={SignUpData.password} type="password" placeholder='Enter Password' />
            </div>
         
            <div>
            <button  >Save </button>
            </div>
            <span>Already have an account?  <Link to="/login">Login</Link></span>
            <div></div>
        </form>
    </div>
  )
}

export default SignUpUser