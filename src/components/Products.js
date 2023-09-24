import { useState } from "react";
import Product from './Product'
function Products({products})
{
    const [basket,setBasket] =useState([])

    return (
        <>
            <div>
                {products.map(product=>(
                    <Product product={product} basket={basket} setBasket={setBasket}/>
                ))}
            </div>
        </>
    )
}

export default Products