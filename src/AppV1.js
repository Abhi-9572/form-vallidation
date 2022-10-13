import React, { useState } from 'react'
import { ConditionalReturns } from './ComponentV1/ConditionalReturns'
import './AppV1.css'
import {InlineStyle} from './ComponentV1/InlineStyle'
import { ModuleCssCom } from './ComponentV1/ModuleCssCom'
import { Form1 } from './Form/Form1'
import { Form2 } from './Form/Form2'
import { Form3 } from './Form/Form3'
import { CopyAdd } from './Form/CopyAdd'
import { FormValidation } from './Form/FormValidation'
import { FormValidationV2 } from './Form/FormValidationV2'
export const AppV1 = () => {
    const[theme,setTheme]=useState(true);
  return (
    <>
    <h2>AppV1</h2>
    {/* <div>Theme:{theme?'1' : '2'}</div>
    <ConditionalReturns theme={theme}/> */}
    <br/>
    {/* <button onClick={()=> setTheme(!theme)}>toggle</button> */}
    {/* <InlineStyle/> */}
    {/* <ModuleCssCom/> */}
    {/* <Form1/> */}
    {/* <Form2/> */}
    {/* <Form3/> */}
    {/* <CopyAdd/> */}
    <FormValidation/>
  {/* <FormValidationV2/> */}

    
    </>
  )
}
