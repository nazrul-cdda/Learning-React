
import React from 'react';

const Billing = ({deta}) => {
    console.log(deta);
    let price = 0;
    deta.map((i) => {
        price += (i.amount * i.price);
    })
    console.log(price);
    return(
        <div>
            <h2>Total Bill = ${price.toFixed(2)}</h2>
        </div>
    )
}
export default Billing;