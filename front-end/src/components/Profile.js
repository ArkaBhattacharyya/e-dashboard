import React,{useState,useEffect} from "react";

const Profile = ()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(()=>{
        getProfile();
       })
    const getProfile= async()=>{
        let id = JSON.parse(localStorage.getItem('user'))._id;
         let result = await fetch(`http://127.0.0.1:3500/profile/${id}`);
         result = await result.json();
         setName(result.name);
         setEmail(result.email);
         setPassword(result.password);
    
     }
  return(
    <div className="register">
        <h1>Profile Details</h1>
        <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
        <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="button" className="Appbutton">Update Profile</button>
    </div>
  )
}
export default Profile;