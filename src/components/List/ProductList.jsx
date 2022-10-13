import React from 'react'
import { useState } from 'react'
import { Product } from './Product'

export const ProductList = () => {
    let productList=[
        {
            id:"1",
            name:"queen panel",
            price:2000,
            quantity:14,
            instock: true
        },
        {
            id:"2",
            name:"king panel",
            price:200,
            quantity:4,
            instock: false
        },
        {
            id:"3",
            name:"single bed",
            price:200,
            quantity:25,
            instock: true
        },
        {
            id:"4",
            name:"double bed",
            price:20000,
            quantity:52,
            instock: true
        }

    ]
    const[product,setProduct]=useState(productList)

    function deleteItem(e)
    {
        console.log(e.target.id);
        let updatedList=product.filter((el)=>e.target.id!==el.id)
        console.log('deleted');
        console.log(updatedList);
        setProduct(updatedList)

    }
    // function buyItem(e)
    // {
    //     console.log('buying');
    //     console.log(e.target.id);
    //     for(let i=0;i<product.length;i++)
    //     {
    //         if(product[i].id===e.target.id)
    //         {
    //             setProduct(product[i].quantity-1);
    //         }
    //     }
            

    // }
    function AddItem()
    {
        product.push(
            {
                id:product[product.length-1].id+1,
            name:"dressser",
            price:20000,
            quantity:52 
            }
        )
        console.log(product);
        setProduct([...product])
    }

   
  return (
    <>
    <div>ProductList</div>
    {/* <Product name={productList[0].name}
    price={productList[0].price}
    quantity={productList[0].quantity}/> */}

    <section>
        {/* {productList.map((el,index)=> */}
        {product.map((el,index)=>
            (
            <div key={el.id}>
            <Product name={el.name} price={el.price} quantity={el.quantity} available={el.instock} />
            <button  id={el.id} onClick={deleteItem}>delete</button>
            {/* <button  id={el.id} onClick={(e)=>deleteItem(e)}>delete</button> */}
            <br/>
            {/* <button id={el.id}  onClick={(e)=>buyItem(e)}>Buy</button> */}
            </div>
            )
        )}
    </section>
    <button onClick={AddItem}>Add Item</button>
    </>
  )
}
