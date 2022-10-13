import React from 'react'
import { useState } from 'react'

export const Form2 = () => {
    const[name,setName]=useState('My Name');
    const[email,setEmail]=useState('My Email');
    // let copyname;
    // let copyemail;
    const[copyname,setCopyname]=useState();
    const[copyemail,setCopyemail]=useState();

    function copyDetails()
    {
        setCopyname(name);
        setCopyemail(email);
    }
  return (
   
    <>
    <h2>Present Address</h2>
    <form>
        Name:
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        Email:
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        <div>NAME:{name}</div>
       <div> EMAIL:{email}</div>

    </form>
    <br />
    <br />
    <div >same as above</div>
    <input onClick={copyDetails} type="checkbox" />
        

    <h2>Permanent Address</h2>
    <form>
        Name:
        <input type="text" value={copyname}  onChange={(e)=>setName(e.target.value)}/>
        Email:
        <input type="text" value={copyemail} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />
        <div>NAME:{name}</div>
       <div> EMAIL:{email}</div>

    </form>
    </>
  )
}
