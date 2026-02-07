import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css'; 

const CreateUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, task})
    .then(result => { 
      console.log(result);
      navigate('/');
    })
    .catch(err => console.log(err));
  };

  return (
    
    <div className='create-user-container'>
      <div className='create-user-card'>
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter Email'
              className='form-control'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="age">Task</label>
            <input
              type="text"
              id="task"
              placeholder='Your Task'
              className='form-control'
              value={task}
              onChange={(e)=>setTask(e.target.value)}
            />
          </div>
          <button type="submit" className='btn-submit'>Submit</button>
          
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
