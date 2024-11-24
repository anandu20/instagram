import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Email from './components/Email';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Profile from "./components/Profile";

const App=()=>{
  const [user,setUser]=useState("");
  console.log(`appuser ${ user}`);

  return(
    <BrowserRouter>
    {user&&<Nav user={user}/>}
    <Routes>
      <Route path='/' element={<Home setUser={setUser}/>}/>
      <Route path='/login' Component={Login}/>
      <Route path='/email' Component={Email}/>
      <Route path='/register' Component={Signup}/>
      <Route path='/profile' Component={Profile}/>


   
    </Routes>
    </BrowserRouter>

  )

}
export default App