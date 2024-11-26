import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Email from './components/Email';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Profile from "./components/Profile";
import AddPro from "./components/Addpro";


const App=()=>{
  const [user,setUser]=useState("");
  const [profile,setProfile]=useState("");

  console.log(`appuser ${ user}`);

  return(
    <BrowserRouter>
    {user&&<Nav user={user} profile={profile}/>}
    <Routes>
      <Route path='/' element={<Home setUser={setUser}/>}/>
      <Route path='/login' Component={Login}/>
      <Route path='/email' Component={Email}/>
      <Route path='/register' Component={Signup}/>
      <Route path='/profile' element={<Profile setUser={setUser} setProfile={setProfile}/>}/>
      <Route path='/addprodetails' element={<AddPro  setUser={setUser} setProfile={setProfile}/>}/>


   
    </Routes>
    </BrowserRouter>

  )

}
export default App