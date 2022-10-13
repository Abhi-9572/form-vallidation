import React from 'react'
import { useRef } from 'react'

export const Form3 = () => {
    //a hook to create reference
    const nameRef=useRef();
    const emailRef=useRef();

    const printValue=(e)=>
    {
        e.preventDefault();
        console.log(nameRef);
        console.log(nameRef.current);
        console.log(nameRef.current.value);
    }
  return (
    <form onSubmit={(e)=>printValue(e)}>
        <label htmlFor="">Name:
        <input type="text" ref={nameRef} />
        </label>

        <label htmlFor="">Email:
        <input type="text" ref={emailRef} />

        </label>
        <button>Submit</button>
        
    </form>
  )
}
