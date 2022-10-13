import React from "react";

export const Player=(props)=>{
    return(

        <>
        <h3>Player Details</h3>
        <div>Name: {props.name}</div>
        <div>Game: {props.game}</div>
        </>
    )
}