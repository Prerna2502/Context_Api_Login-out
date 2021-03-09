import React, { useState } from 'react'
import './LogIn.css'
// import {LogInInfo,Token,LoginInfo} from '../LogInInfo'

export default function Login(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const LogInHandler = (e) =>{
        e.preventDefault();
        let valid = false;
        const LoginInfo = JSON.parse(localStorage.getItem('LoginCred')).Credentials;
        LoginInfo.forEach(credential =>{
            if(userName === credential.username && password === credential.password){
                props.setFlag(true);
                alert('Logged In successfully!!!');
                valid=true;
            }
        })
        if(valid===false) {
            alert('Wrong credentials');
        }
    }
    return (
        <div className='loginForm'>
            <form className='m-auto pt-5' onSubmit={LogInHandler}>
                <div className="form-group">
                    <label htmlFor="userName"><b>User Name</b></label>
                    <input type="text" className="form-control" id="userName" placeholder="Enter username"
                    onChange={(data)=>setUserName(data.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    onChange={(data)=>setPassword(data.target.value)} required/>
                </div>
                    <button type="submit" className="btn btn-primary">LogIn</button>
            </form>
        </div>
    )
}
