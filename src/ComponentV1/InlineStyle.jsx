import React from 'react'

export const InlineStyle = () => {
    let style2={
        color:'white',
        backgroundColor:'black'
    }
  return (
    <>
    <div style={{backgroundColor:'blue' ,color:'yellow' , margin:'15px'}}>Style type 1</div>
    <div style={style2}>Style type 2</div>
    </>
  )
}
