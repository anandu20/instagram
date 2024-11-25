import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = ({setUser}) => { 
  const navigate=useNavigate()
   const auth=localStorage.getItem('Auth')
   console.log(auth);
   useEffect(()=>{
    getDetails();
  },[])
  const getDetails=async()=>{
    if(auth!==null){
      try {
        const res = await axios.get("http://localhost:3000/api/home", { headers: { "Authorization": `Bearer ${auth}` } })
        console.log(res);
        if(res.status==200){
          console.log(res.data.username);
          setUser(res.data.username)
        
        }else if(res.status==403){
          alert(res.data.msg)
          navigate('/login')
        }else{
          navigate('/login')
        }
        
      } catch (error) {
        console.log("error");
        navigate('/login')
        
      }
    }else{
      navigate('/login')

    }
  }
  
  return (
    <div className='home'>
        <h1>INSTAGRAM</h1>
     </div>
  )
}

export default Home
