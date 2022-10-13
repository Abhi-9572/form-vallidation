import React from 'react'
import { useState } from 'react'
import Style from './FormValidation.module.css'

export const FormValidation = () => {
    const initialValue={
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    const[signUpValidation,setSignUpValidation]=useState(initialValue)

    const[signUpValidationError,setSignUpValidationError]=useState(
      {
        usernameError:"",
        emailError:"",
        passwordError:"",
        confirmPasswordError:""
      }
    )

    const usernameValidator=()=>
    {
      if(signUpValidation.username==="")
      {
        setSignUpValidationError({...signUpValidationError,usernameError:"please enter usename"})
      }
      else if(signUpValidation.username.length<3)
      {
        setSignUpValidationError({...signUpValidationError,usernameError:"username must be atleast 3 characer"})
      }
      else{
        setSignUpValidationError(initialValue)

      }
    }

    const emailValidator=()=>
    {
      if(signUpValidation.email==="")
      {
        setSignUpValidationError({...signUpValidationError,emailError:"plase enter email"})
      }
      // else if(signUpValidation.username.length<3)
      // {
      //   setSignUpValidationError({...signUpValidationError,usernameError:"username must be atleast 3 characer"})
      // }
      else{
        setSignUpValidationError(initialValue)

      }
    }

    const passwordValidator=()=>
    {
      if(signUpValidation.password==="")
      {
        setSignUpValidationError({...signUpValidationError,passwordError:"please enter password"})
      }
      else if(signUpValidation.password.length<3)
      {
        setSignUpValidationError({...signUpValidationError,passwordError:"password must be atleast 3 characer"})
      }
      else{
        setSignUpValidationError(initialValue)

      }
    }
    

    const submitHandler=(e)=>
    {
      e.preventDefault();
      // console.log(e);
      usernameValidator();
      // emailValidator();
      // passwordValidator();
      
    }
    const handleUserInputChange=(e)=>
    {
        setSignUpValidation({...signUpValidation,[e.target.id]:e.target.value})
    }
  return (
    <form className={Style.container} onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text"  id='username' value={signUpValidation.username} 
        onChange={(e)=>handleUserInputChange(e)}/>
        {/* {!(signUpValidation.username) && <div className={Style.error}>please enter username</div>} */}
        <div className={Style.error}>{signUpValidationError.usernameError}</div>
        

        <label htmlFor="email">Email</label>
        <input type="text" id='email'  value={signUpValidation.email} 
        onChange={(e)=>handleUserInputChange(e)}/>
        {/* {!(signUpValidation.email) && <div className={Style.error}>please enter email</div>} */}
        <div className={Style.error}>{signUpValidationError.emailError}</div>
        


        <label htmlFor="password">Password</label>
        <input type="password" id='password'  value={signUpValidation.password} 
        onChange={(e)=>handleUserInputChange(e)}/>
        {/* {!(signUpValidation.password) && <div className={Style.error}>please enter upassword</div>} */}
        <div className={Style.error}>{signUpValidationError.passwordError}</div>
        


        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id='confirmPassword'  value={signUpValidation.confirmPassword} 
        onChange={(e)=>handleUserInputChange(e)}/>
        {/* {!(signUpValidation.confirmPassword) && <div className={Style.error}>please enter confirtm password</div>}
         */}
          <div className={Style.error}>{signUpValidationError.confirmPasswordError}</div>
        {
          signUpValidation.confirmPassword!==signUpValidation.password ?
          <div className={Style.error}>Password Does not match</div> : null
        }
        


        <button>Sign Up</button>
    </form>
  )
}
