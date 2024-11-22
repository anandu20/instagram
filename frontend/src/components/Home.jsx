import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  let auth;
  useEffect(()=>{
    auth=sessionStorage.getItem('Auth')
    if(auth==null){
      navigate('/login')
    }
  })
  return (
    <div className='home'>
        <h1>INSTAGRAM</h1>
     </div>
  )
}

export default Home