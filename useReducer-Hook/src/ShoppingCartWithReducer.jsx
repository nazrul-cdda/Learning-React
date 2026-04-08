
// import { useReducer } from "react";

// const initialState = {
//     items:[], 
//     totalAmount: 0,
//     totalItems: 0,
// };

// const reducer = (state, action) => {
//     switch(action.type) {
//         case"Add_ITEM": {
//             const existingItemIndex = state.items.findIndex(
//                 item => item.id === action.payload.id;
//             )
//         }
//         default:
//             return state;
        
//     }
// };

// export const ShoppingCartWithReducer = () => {
//     const[state, dispatch] = useReducer(reducer, initialState);
//     const products = [
//         { id: 1, name: "React Course", price: 49.99 },
//         { id: 2, name: "Node.js Course", price: 39.99 },
//         { id: 3, name: "Javascript Bundle", price: 89.99 },
//     ];
//     return (
//         <div>
//             <h1>Products</h1>
//             {
//                 products.map(product => (
//                     <div key = {product.id}>
//                         <h2>
//                             {product.name} - ${product.price}
//                         </h2>
//                         <button>Add to cart</button>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }