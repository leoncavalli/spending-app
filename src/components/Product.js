import { useState } from "react";

function Product({ product }) {
    const addBasket = () =>{
        console.log("Bought")
    }
    return (
        <>
        <div className="product">
            <h3>
                {product.name}
            </h3>
            <h2>${product.price}</h2>
            <div>
                <button onClick={addBasket}>Buy</button>
                <span className="amount">0</span>
                <button>Sell</button>
            </div>
        </div>
           
        </>
    )
}

export default Product