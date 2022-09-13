import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login } from '../services/user';

const Login = () => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) =>{
        setuserData({...userData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(userData);
        login(userData).then(navigate('/task-list'));
        
    }

  return (
    <form className='bg-zinc-800 max-w-sm p-4' onSubmit={handleSubmit}>
        <h1 className='text-xl text-center mb-4'>Login</h1>
        <label htmlFor="email" className='block text-sm font-bold mb-2'>Email:</label>
        <input name="email" type="text" className='w-full p-2 rounded-md bg-zinc-600 mb-2 text-sm' onChange={handleChange}/>
        <label htmlFor="password" className='block text-sm font-bold mb-2'>Password:</label>
        <input name="password" type="password" className='w-full p-2 rounded-md bg-zinc-600 mb-2' onChange={handleChange}/>
        <button className='bg-indigo-600 px-2 py-1 rounded-md m-auto w-full my-4'>Continue</button>
    </form>
  )
}

export default Login;