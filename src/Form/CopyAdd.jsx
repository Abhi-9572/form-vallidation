import React from 'react'
import { useState } from 'react'

export const CopyAdd = () => {
  let initialVal={
      street:'',
      city:'',
      pin:''
  }

  const[presentAdd,setPresentAdd]=useState(
    {
      street:'',
      city:'',
      pin:''
    }
  )
  const[permanenetAdd,setPermanentAdd]=useState(
    {
      street:'',
      city:'',
      pin:''
    }
  )

  const copyAdd=(e)=>
  {
   if(e.target.checked)
   {
    setPermanentAdd(presentAdd)
   }
   else{
    setPermanentAdd(initialVal)
   }

  }
  return (
    <>
    <h2>Present Address</h2>
    <form>
        Street no:
        <input type="text" value={presentAdd.street} onChange={(e)=>setPresentAdd({...presentAdd,street: e.target.value})}/>
        <br />
        City:
        <input type="text" value={presentAdd.city} onChange={(e)=>setPresentAdd({...presentAdd,city: e.target.value})} /><br />
        Pin:
        <input type="text" value={presentAdd.pin} onChange={(e)=>setPresentAdd({...presentAdd,pin: e.target.value})}/><br />
        <br />
        <br />

    </form>
    <div>
      <div>Updated Street:{presentAdd.street}</div>
      <div>Updated city:{presentAdd.city}</div>
      <div>Updated pin:{presentAdd.pin}</div>
    </div>
    <input onClick={(e)=>copyAdd(e)} type="checkbox" />
      <h2>Present Address</h2>
      <form>
          Street no:
          <input type="text"  value={permanenetAdd.street}/><br />
          City:
          <input type="text" value={permanenetAdd.city}/><br />
          Pin:
          <input type="text" value={permanenetAdd.pin}/><br />
          <br />
          <br />
  
      </form>
    </>
  )
}
