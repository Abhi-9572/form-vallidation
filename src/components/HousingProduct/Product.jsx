// const Product =()=>{
//     return (
//         <section>
//             <img src="#"></img>
//             <p>Queen Panel Bed</p>
//             <p>HouseHold</p>
//             <p>rating : 4</p>
//             <p>price : 2500</p>
//             <button>Add TO Cart</button>
//         </section>
//     )
// }

const Product =(props)=>{
    console.log(props);
    return (
        <section>
            <img src="#"></img>
            <p>{props.name}</p>
            <p>{props.type}</p>
            <p>rating : {props.rating}</p>
            <p>price : {props.price}</p>
            <p>{props.available? 'In stock' : 'Out of stock'}</p>
            <p>{props.address}</p>
            <button>Add TO Cart</button>
        </section>
    )
}

export default Product;