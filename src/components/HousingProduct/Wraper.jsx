import React from 'react'

export const Wraper = (props) => {
    // console.log(props);
    // console.log(props.nums);
    // console.log(props.nums[0]);
    // console.log(props.fun);

    function MyFun()
    {
        console.log('my function called');
    }

    function PrintName(name)
    {
        console.log(`my function called by ${name}`);
    }
  return (
    <>
    <div>Wraper</div>
    <div>Address: {props.obj.address}</div>
    <div>Age: {props.obj.age}</div>
    <div>{props.nums}</div> {/*unpacked automatically interly*/}
    <button onClick={MyFun}>click me</button>
    <button onClick={()=> {PrintName(props.obj.age)}}>Print Name</button>
    </>
    
  )
}
