import React from 'react'
import { UseTodo } from '../contexts/TodosContext';

function UserProfile() {
    let {user } = UseTodo();
    console.log(user ,"roshannnnnnn");
    const {name , email}= user;
    
  return (
    <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>Hellloooo</h1>
    </div>
  )
}

export default UserProfile