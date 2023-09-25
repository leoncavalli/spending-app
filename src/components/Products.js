import { useEffect, useState } from "react";
import Product from './Product'
function Products({products,budget,total,setTotal})
{
    const [basket,setBasket] =useState([])
    
    useEffect(()=>{
        setTotal(
           basket.reduce((acc,item)=>{
            return acc +(item.amount*products.find(product=>product.id===item.id).price)
           },0)
        );
    },[basket])
    return (
        <>
            <div>
                {products.map(product=>(
                    <Product key={product.id} total={total} budget={budget} product={product} basket={basket} setBasket={setBasket}/>
                ))}
            </div>
        </>
    )
}

export default Products