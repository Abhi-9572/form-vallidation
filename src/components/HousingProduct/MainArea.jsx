import React from 'react'

export const MainArea = (props) => {
    console.log(props);{/*directly available*/}
  return (
    <>

<   div>MainArea</div>
    <div>{props.address}</div>
    </>
  )
}
