import React from 'react'

// export const Product = (props) => {
//   return (
//     <>
//     <div>Product</div>
//     <div>name: {props.name}</div>
//     <div>price: {props.price}</div>
//     <div>quantity: {props.quantity}</div>
//     <div>{props.available?'in stock' : 'out of stock'}</div>
//     {/* {props.available ? <button>Buy</button> : <div></div>} */}
//     {/* {props.available ? <button>Buy</button> : null} */}
//     {/* short circuit operator */}
//     {/* {props.available && <button onClick={buyProduct}>Buy</button> }  */}

//     </>
//   )
// }

export const Product = ({name,price,quantity,available}) => {
  return (
    <>
    <div>Product</div>
    <div>name: {name}</div>
    <div>price: {price}</div>
    <div>quantity: {quantity}</div>
    <div>{available?'in stock' : 'out of stock'}</div>
    {/* {props.available ? <button>Buy</button> : <div></div>} */}
    {/* {props.available ? <button>Buy</button> : null} */}
    {/* short circuit operator */}
    {/* {props.available && <button onClick={buyProduct}>Buy</button> }  */}

    </>
  )
}
