import React from 'react'
import { useState } from 'react'

export const ChildToParent = (props) => {

    const[userInfo,setUserInfo]=useState({
        name:'abhishek',
        address:'madanpur'
    })

  return (
    <>

    <h2>ChildToParent</h2>
    <div>Name: {props.name}</div>
    <div>Name:{userInfo.name}</div>
    <button onClick={()=> setUserInfo({...userInfo,name:'dpk'})}>update name</button>
    <div>Add:{userInfo.address}</div>
    <button onClick={()=> setUserInfo({...userInfo,address:'jamshedpur'})}>update name</button>
    {/* <button onClick={props.print}>print details</button> */}
    <button onClick={()=>props.print(userInfo)}>print details</button>
    </>
  )
}
