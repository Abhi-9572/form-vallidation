import React from 'react'
import { ChildOne } from './ChildOne'
import { ChildTWo } from './ChildTWo'

export const Parent = () => {
    let name="abhishek"
  return (
    <>
    <div>Parent</div>
    <ChildOne name={name}/>
    <ChildTWo name={name}/>
    </>
  )
}
