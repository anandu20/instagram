import React ,{useState}from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Profile.scss"

const Profile = ({setUser,setProfile}) => {
    const navigate=useNavigate();
    const value=localStorage.getItem('Auth')
    const [user,setData]=useState({})
    // const [posts,getPost]=useState([])
    useEffect(()=>{
        getDetails();
        // getPosts();
      },[])
      const getDetails=async()=>{
        if(value!==null){
            try {
                const res=await axios.get("http://localhost:3000/api/profile",{headers:{"Authorization":`Bearer ${value}`}})
                console.log(res);
                
                if(res.status==200){
                    console.log(res.data.profile);
                    setUser(res.data.username)
                    setProfile(res.data.profile.profile)
                    setData(res.data.profile)
                    
                }else if(res.status==403){
                    alert(res.data.msg);
                }
                else{

                }
            } catch (error) {
                console.log("error");
                
            }
        }else{

        }
    }
    console.log(user);
      // console.log(details);
      
    // const getPosts=async()=>{
    //   const res=await axios.get("http://localhost:3000/api/getPost",{headers:{"Authorization":`Bearer ${value}`}})
    //   // console.log(res.data);
    //   if(res.status==201){
    //     getPost(res.data.post)        

    //   }
    //   else{
    //     alert("error")
    //   }
    // }
    // console.log(posts);


    
  return (
    <div className='Profile'>
    <div className="left">
      <div className="top">
        <img src={user.profile} alt="" />
        <div className="details">
        <h4>Name :{user.name}</h4>
        <h4>Bio :{user.bio}</h4>
        <h4>DOB :{user.dob}</h4>

        </div>
      </div>
      <div className="bottom">
          <button onClick={()=>navigate('/addpost')}>Add Posts</button>
          <button onClick={()=>navigate('/addprodetails')}>Edit detail</button>
          <button >Delete Account</button>
      </div>
    </div>
    <div className="right">
        {/* {posts.map((post)=>
           <div className='post' key={post._id}>
            <img src={post.photo} alt="" />
           
          </div>
          )} */}
    </div>
  </div>
)
}


export default Profile