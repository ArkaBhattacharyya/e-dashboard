import React,{useState,useEffect} from "react";
import {json, useNavigate} from 'react-router-dom';

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
    })
    const collectData= async ()=>{
        console.log(name,email,password);
        let result = await fetch('http://127.0.0.1:3500/register',{
          method:'post',
          body: JSON.stringify({name,email,password}),
          headers: {
              'Content-Type':'application/json'
          },
        })
        result = await result.json()
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/');
    }
    return(
        <div className="register">
            <h1>Registration Form</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password  " />
            <button onClick={collectData} type="button" className="Appbutton">SignUp</button>
        </div>
    )
}
export default SignUp;