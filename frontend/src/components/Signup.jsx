import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import '../css/Signup.css'
import axios from 'axios'


import { useState } from 'react';
const Signup = () => {
    const email = localStorage.getItem('email')
    const navigate=useNavigate()
    const [emp,setEmp]=useState({
        username:"",
        email:email,
        password:"",
        cpassword:""

    });
    const handleChange=(e)=>{
        console.log(e.target.value);
        setEmp((pre)=>({
            ...pre,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(emp);
        // const res = await fetch("http://localhost:3000/api/signup",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(emp)
        // })
        const res = await axios.post("http://localhost:3000/api/signup",emp,{Headers:{"Content-Type":"application/json"}})
        console.log(res);
        console.log(res.data.msg);
        if(res.status==201){
            localStorage.removeItem('email')
            alert(res.data.msg)
            navigate('/login')
        }
        else{
            alert(res.data.msg);
        }


    }
  return (
    <div>
          <div className="cose">
<div className="cont">
    <h1>Sign Up</h1>
    <form id="signup" onSubmit={handleSubmit}>
        <div className="form-groups">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleChange}/>
        </div>
        {/* <div className="form-groups">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange}/>
        </div> */}
        <div className="form-groups">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange}/>
        </div>
        <div className="form-groups">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" id="cpassword" name="cpassword" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn">Sign Up</button>

       <div>
       <p> Already have an Account?  <Link to={'/login'}>Log in</Link></p> 
       </div>

   
    </form>
</div>
</div>
    </div>
  )
}

export default Signup