import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Email from './components/Email';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/login' Component={Login}/>
      <Route path='/email' Component={Email}/>
      <Route path='/register' Component={Signup}/>
   
    </Routes>
    </BrowserRouter>

  )

}
export default App