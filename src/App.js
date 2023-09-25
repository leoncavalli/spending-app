import './App.css';
import { useState,useEffect } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import products from './products.json'
function App() {

  const [budget,setBudget] =useState(20000)
  const [total,setTotal] = useState(0)
    


  return (
    <> 
    <Header budget={budget} total={total}/>
    <Products products={products} budget={budget} total={total} setTotal={setTotal}  />
    </>
  );
}

export default App;
