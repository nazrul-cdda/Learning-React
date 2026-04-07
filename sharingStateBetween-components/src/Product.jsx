
import React, { useState } from 'react';

const App = ({deta, onAdd}) => {
    const[cnt, setCnt] = useState(0);
    if (!deta) return <p>Loading...</p>;
    return (
        <div>
            <h2>{deta.name}</h2>
             <img className = "image" src={deta.image} />
             <p> Price = ${deta.price}</p>
             <p>Total added item = {deta.amount}</p>
             <button onClick={onAdd}>Add to Cart</button>
        </div>
    )
}
export default App;