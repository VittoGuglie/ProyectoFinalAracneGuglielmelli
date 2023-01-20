// import React from 'react';
// import { useState } from 'react';

// const Cart = (props) => {
//     const [cartItems, setCartItems] = useState([]);
//     const { onAdd } = props;
//     const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
//     const taxPrice = itemsPrice * 0.14;
//     const shippingPrice = itemsPrice > 2000 ? 0 : 20;
//     const totalPrice = itemsPrice + taxPrice + shippingPrice;
//     const onRemove = (product) => {
//         const exist = cartItems.find((x) => x.id === product.id);
//         if(exist.quantity >= 1){
//             setCartItems(cartItems.filter((x) => x.id !== product.id));
//         } else{
//             setCartItems.map(
//                 cartItems.map((x) =>
//             x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x)
//             )
//         }
//     }
//     return (
//         <aside>
//             <h2>Cart Items</h2>
//             <div>
//                 {
//                     cartItems.length === 0 && <div>Cart Is Empty</div>
//                 }
//                 {
//                     cartItems.map((item) => (
//                         <div key={item.id} className='row'>
//                             <div className='col-2'>{item.name}</div>
//                             <div className='col-2'>
//                                 <button onClick={()=> onRemove(item)} className="btn btn-danger">-</button>
//                                 <button onClick={()=> onAdd(item)} className="btn btn-primary">+</button>
//                             </div>
//                             <div className='col-2'>
//                                 {item.quantity} x ${item.price.toFixed(2)}
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </aside>
//     )
// }

// export default Cart