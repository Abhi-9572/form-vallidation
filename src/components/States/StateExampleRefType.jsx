import React from 'react'
import { useState } from 'react'

export  const StateExampleRefType = () => {

    const[userInfo,setUserInfo]=useState({
        name:'abhishek',
        address:'madanpur'
    })

    const[numbers,setNumbers]=useState([1,2,3])

    function handler()
    {
      console.log('before',numbers);
      numbers.push(numbers[numbers.length-1]+1);
      console.log('after',numbers);
      // setNumbers(numbers);
      // let newnum=numbers;//ref assigned (this wont worked)
      let newnum=[...numbers]
      // setNumbers([...numbers]);
      setNumbers(newnum)

    }
  return (
    <>
    <div>StateExampleRefType</div>
    <div>Name:{userInfo.name}</div>
    {/* <button onClick={()=> setUserInfo({name:'anu' , address:'madanpur'})}>update name</button> */}
    <button onClick={()=> setUserInfo({...userInfo,name:'dpk'})}>update name</button>
    <div>Add:{userInfo.address}</div>
    {/* <button onClick={()=> setUserInfo({name:'abhishek' , address:'banglore'})}>update Address</button> */}
    <button onClick={()=> setUserInfo({...userInfo,address:'jamshedpur'})}>update name</button>

    <div>nums: {numbers}</div>
    <button onClick={handler}>Add Number</button>
    </> 
  )
}
