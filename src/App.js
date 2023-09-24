import './App.css';
import { useState,useEffect } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import products from './products.json'
function App() {

  const [budget,setBudget] =useState(100)
  return (
    <> 
    <Header budget={budget} />
    <Products products={products} />
    </>
  );
}

export default App;
