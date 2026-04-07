
import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';

import Product from './Product.jsx'
import Billing from './Billing.jsx';

export const App = () => {
  const[data, setData] = useState([]);
  const[idx, setIdx] = useState(0);

  useEffect(() => {
    const getData = async() => {
      const res = await fetch("/products.json");
      const Data = await res.json();
      setData(Data);
    };
    getData();
    console.log("jibone ekbar");
  }, []);

  const handleClcik = () => {
    setIdx(prev => (prev + 1) % data.length);
  }
  const onAddtoCart = () => {
    console.log("ok");
    setData(prev =>
      prev.map((p, i) =>
        i === idx ? { ...p, amount: p.amount + 1 } : p
      )
    );
  };
  const clearCart = () => {
  setData((prev) => prev.map((p) => ({ ...p, amount: 0 }))
  );
};
  return(
    <div>
      <h1>Naraz</h1>
      <Product 
        deta = {data[idx]}
        onAdd = {onAddtoCart}
      />
      <button onClick={handleClcik}>Next</button>
      <Billing deta = {data}/>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}
export default App;
