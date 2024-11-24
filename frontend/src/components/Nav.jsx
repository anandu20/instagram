import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Nav.css"
import Profile from "./Profile";
const Nav=({user})=>{
    const navigate=useNavigate();
    console.log(user);
    
    return(
        <div className="navv">
            <div className="left">Instgram</div>
            <div className="right">
                <img src={Profile?Profile:img} alt="" onClick={()=>navigate('/profile')}/>
                <h3>{user}</h3>
                {/* <Link to={"/profile"}>{user.toUpperCase()}</Link> */}
            </div>
            
        </div>
    )
}
export default Nav