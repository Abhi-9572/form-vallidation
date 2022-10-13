import React from 'react'
import { useState } from 'react';

export const Form1 = () => {
    let userInfo={
        name:'',
        password:'',
        email:''
    }
    const[user,setUser]=useState({
        name:'',
        password:'',
        email:''
    });

    const[showDetails,setShowDetails]=useState(false)
    // function NameHandler(e)
    // {
    //     userInfo.name=e.target.value;
    //     // console.log(userInfo);
    // }
    // function PasswordHandler(e)
    // {
    //     userInfo.password=e.target.value;
        
    // }
    // function EmailHandler(e)
    // {
    //     userInfo.email=e.target.value;
        
    // }

    function userDetailsHandler(e)
    {
        if(e.target.id==='username')
        {
            userInfo.name=e.target.value;
        }
        if(e.target.id==='password')
        {
            userInfo.password=e.target.value;
        }
        if(e.target.id==='email')
        {
            userInfo.email=e.target.value;
        }
    }
    function printResult(e)
    {
        e.preventDefault();
        console.log(userInfo);
        if(userInfo.name!=='abhi')
        {
            setUser(userInfo)
        setShowDetails(true)
        }
        // setUser(userInfo)
        // setShowDetails(true)
    }
  return (
    <>
    <form onSubmit={(e)=>printResult(e)}>
        <label htmlFor="username">Name</label>
        <br/>
        <input id='username' type="text"  onChange={(e)=> userDetailsHandler(e)}/>
        <br/>
        <br/>
        <label htmlFor="password">Password</label>
        <br/>
        <input id='password' type="Password" onChange={(e)=> userDetailsHandler(e)}/>
        <br/>
        <br/>
        <label htmlFor="email">Email</label>
        <br/>
        <input id='email' type="email" onChange={(e)=> userDetailsHandler(e)}/>
        <br/>
        <br/>
        <button>Submit</button>
    
    </form>
    <br/>
    {/* {
        user.name && <section>
        <h3>Details</h3>
        <div>Name:{user.name}</div>
        <div>Passwoed:{user.password}</div>
        <div>Email:{user.email}</div>
        
    </section>
    } */}

    {/* <section>
        <h3>Details</h3>
        <div>Name:{user.name}</div>
        <div>Passwoed:{user.password}</div>
        <div>Email:{user.email}</div>
        
    </section> */}

    {showDetails &&   <section>
        <h3>Details</h3>
        <div>Name:{user.name}</div>
        <div>Passwoed:{user.password}</div>
        <div>Email:{user.email}</div>
        
    </section> }
    </>
  )
}
