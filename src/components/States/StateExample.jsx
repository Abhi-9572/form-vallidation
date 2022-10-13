import React, { useState } from 'react'

export const StateExample = () => {
    // let count=0;
    const[count,setCount]=useState(0);
    // console.log("count:"+ count);
    // console.log(setCount);

    const[name,setName]=useState('abhishek');

    function increment(){
        // count=count+1;
        setCount(count+1) //web API
        console.log(count);
    }

    function decrement(){
        // count=count-1;
        setCount(count-1)
        console.log(count);
    }
    console.log('renderind' ,count);


  return (
    <>
    <div>StateExample</div>
    <div>count: {count}</div>
    <button onClick={increment}>+</button>
    <br/>
    <br/>
    <button onClick={decrement}>-</button>
    <div> Name: {name}</div>
    <button onClick={()=> setName('deepak')}>update name</button>

    </>
  )
}
