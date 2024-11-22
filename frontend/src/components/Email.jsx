import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "../css/Email.css";

const Email =()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState({
        email:""
    });
    const handleChange=(e)=>{
        console.log(e.target.value);
        setEmail((pre)=>({
            ...pre,[e.target.name]:e.target.value 
           }))
        
    }
    const  handleSubmit= async(e)=>{
        e.preventDefault()
        // console.log(email);
        // const res=await fetch("http://localhost:3000/api/verifyemail",{
        //     method: "POST",
        //     headers:{"Content-Type":"Application/json"},
        //     body:JSON.stringify(email)
        // })
        const res=await axios.post("http://localhost:3000/api/verifyemail",{email},{Headers:{"Content-Type":"Application/json"}});
        console.log(res);
        
        console.log(res.data.msg);
        if(res.status==201){
            localStorage.setItem('email',email);
            alert(res.data.msg);
            navigate('/login')
        }
        else{
            alert(res.data.msg)
        }
        
        
    }
    return(
        <div>
        <div className="coss">
            <div className="containerr">
            <h1>Email Verify</h1>
            
            <form id="forget" onSubmit={handleSubmit}>
                <div className="form-groupp">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange}/>
                </div>
                <button type="submit" className="btnn">Send</button>
            </form>
        </div>
    </div>
</div>
    )
}
export default Email