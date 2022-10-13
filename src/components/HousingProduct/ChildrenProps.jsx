import React from 'react'

export const ChildrenProps = (props) => {
  return (
   <>
    <div>ChildrenProps</div>
    <div>Name: {props.name}</div>
    <div>{props.children}</div>
   </>
  )
}
