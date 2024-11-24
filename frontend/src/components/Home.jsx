import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = ({setUser}) => { 
  const navigate=useNavigate()
   const auth=localStorage.getItem('Auth')
   console.log(auth);
   useEffect(()=>{
    getUser();
   })
   const getUser=async()=>{
    const res = await axios.get("http://localhost:3000/api/home", { headers: { "Authorization": `Bearer ${auth}` } })
    if(res.status==200){
      setUser(res.data.username)
      console.log(res);
    }
    else{
      alert("error")
    }

   }

  
  return (
    <div className='home'>
        <h1>INSTAGRAM</h1>
     </div>
  )
}

export default Home