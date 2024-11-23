import React from 'react'
import '../css/Login.css'
import {Link, useNavigate} from 'react-router-dom';

import { useState } from 'react';
const Login = () => {
    const navigate=useNavigate();
    const [logins,setLogins]=useState({
        
        email:"",
        password:""

    });
    const handleChange=(e)=>{
        console.log(e.target.value);
        setLogins((pre)=>({
            ...pre,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(logins);
        const res = await fetch("http://localhost:3000/api/signin",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(logins)
        })
        console.log(res);
        const result=await res.json();
        console.log(result);
        localStorage.setItem('Auth',result.token)
        if(res.status==200){
            navigate('/');
        }

    }
  return (
    <div>
    <div className="cos">
    <div className="container">
        <h1>Sign In</h1>
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" 
            alt="Instagram Logo" 
            className="logo"
          />
        <form id="signin" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange}/>
            </div>
            <button type="submit" className="btns">Sign In</button>

            <div>
            <p> Dont have an Account?  <Link to={'/email'}>Sign Up</Link></p> 
            </div>
           

           
        </form>
    </div>
</div>
    </div>

  )
}

export default Login