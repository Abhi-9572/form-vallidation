import React, { useState } from 'react'
import { useRef } from 'react'
import Style from './FormValidationV2.module.css'

export const FormValidationV2 = () => {
    const usernameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();

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

      const userNameValidator=()=>
      {
        if( usernameRef.current.value==="")
        {
          setSignUpValidationError({...signUpValidationError , usernameError:"user name can not empty"})
        }
        else if(usernameRef.current.value.length<4)
        {
            setSignUpValidationError({...signUpValidationError , usernameError:"user name must be atleast 4 character"}) 
        }
        else{
            setSignUpValidationError(initialValue)

        }
      }

      const submitHandler=(e)=>
      {
          e.preventDefault();
        //   console.log('usernameRef' , usernameRef)
        //   console.log('usernameRef' , usernameRef.current.value)
        //   console.log('emailRef',emailRef);
          userNameValidator();
          
          
  
      }
  return (
    <form className={Style.container} onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text"  id='username' 
        onBlur={userNameValidator}
       ref={usernameRef}/>
        {/* {!(signUpValidation.username) && <div className={Style.error}>please enter username</div>} */}
        <div className={Style.error}>{signUpValidationError.usernameError}</div>
        

        <label htmlFor="email">Email</label>
        <input type="text" id='email' 
        ref={emailRef}/>
        {/* {!(signUpValidation.email) && <div className={Style.error}>please enter email</div>} */}
        <div className={Style.error}>{signUpValidationError.emailError}</div>
        


        <label htmlFor="password">Password</label>
        <input type="password" id='password'  ref={passwordRef}/>
        {/* {!(signUpValidation.password) && <div className={Style.error}>please enter upassword</div>} */}
        <div className={Style.error}>{signUpValidationError.passwrdError}</div>
        


        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id='confirmPassword'  
         ref={confirmPasswordRef}/>
        {/* {!(signUpValidation.confirmPassword) && <div className={Style.error}>please enter confirtm password</div>}
         */}
          <div className={Style.error}>{signUpValidationError.confirmPasswordError}</div>
{/*            
        {
          signUpValidation.confirmPassword!==signUpValidation.password ?
          <div className={Style.error}>Password Does not match</div> : null
        }
         */}


        <button>Sign Up</button>
    </form>
  )
}
