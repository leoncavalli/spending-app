import { useState } from "react";

function Product({ total,budget,product, basket, setBasket }) {
    const basketItem = basket.find(item => item.id === product.id)
    const remaining  = budget-total;
    const hasEnoughBudget = product.price > remaining ? false : true;

    const addBasket = () => {
        console.log(remaining);
        setBasket([...basket, product])
        const addedProduct = basket.find(item => item.id === product.id)
        if (addedProduct && hasEnoughBudget) {
            addedProduct.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), addedProduct])
        }
        else {
            setBasket([...basket, { id: product.id, amount: 1 }])
        }
    }


    const removeBasket = () => {
        const removedProduct = basket.find(item => item.id === product.id);

        removedProduct.amount -= 1;
        if (removedProduct.amount == 0) {
            setBasket([...basket.filter(item => item.id !== product.id)]);
        }
        else {
            setBasket([...basket.filter(item => item.id !== product.id), removedProduct]);
        }


    }
    return (
        <>
            <div className="product">
                <h3>
                    {product.name}
                </h3>
                <h2>${product.price}</h2>
                <div>
                    <button disabled={!hasEnoughBudget} onClick={addBasket}>Buy</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button disabled={!basketItem} onClick={removeBasket}>Sell</button>
                </div>
            </div>

        </>
    )
}

export default Product