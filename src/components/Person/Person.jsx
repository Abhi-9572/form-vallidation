import React from 'react'
import { Player } from './Player'

export const Person = (props) => {
  return (
    <>
    <h2>Person Details</h2>
    <div>Name: {props.name}</div>
    <div>Address: {props.address}</div>
    <div>Gender: {props.gender}</div>
    <br/>
    <Player name={props.name} game="Cricket"/>
    
    </>
  )
}
