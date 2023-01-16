import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const Loginhandle = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:3500/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        } else {
            alert("Please Selete Correct Details");
        }
    }
    return (
        <div className="login">
            <h1>Login Form</h1>
            <input type="text" className="inputBox" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email Address" />
            <input type="text" className="inputBox" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" />
            <button type="button" onClick={Loginhandle} className="Logbutton">Login</button>
        </div>
    )
}
export default Login