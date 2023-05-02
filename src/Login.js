import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const validator=require("validator");

const Login=()=>{

    const nav=useNavigate();
    const[input,setInput]=useState({
        email:"",
        password:""
    });
   
    const inputEvent=(event)=>{
        const{value,name}=event.target;
        setInput((preValue)=>{
            if(name=='email'){
                return{
                    email:value,
                    password:preValue.password
                };
            }else if(name=='password'){
                return{
                    email:preValue.email,
                    password:value
                };
            }
        });
    };

    const onsubmit=(event)=>{
        event.preventDefault();
        const res=validator.isEmail(input.email);
        if(!res)
        {
            alert("Email is invalid");
        }
        else{
            alert("Signup successful!");
            nav("/Main");
        }
        

    }

    return(
        <>
            <div className='loginContainer'>
                <div className='loginMain'>
                    <div className='head'><u>Treasure Hunt</u></div>
                    <div className='log1'>Signup Page</div>
                    <input className='loginput' type="email" placeholder='Enter your email' onChange={inputEvent} name="email" value={input.email}/>
                    <input className="loginput" type="password" placeholder='Enter your password' onChange={inputEvent} name="password" value={input.password}/>
                    <button onClick={onsubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default Login;