import React, { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';

const Cart = (props) => {
    
    const { onAdd } = props;
    const { cartItems, deleteItem } = useContext(Shop);
    // const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;
    
    return (
        <aside>
            <h2>Cart Items</h2>
            <div>
                {
                    cartItems.length === 0 && <div>Cart Is Empty</div>
                }
                {
                    cartItems.map((item) => (
                        <div key={item.id} className='row'>
                            <div className='col-2'>{item.name}</div>
                            <div className='col-2'>
                                {item.quantity} x ${item.price.toFixed(2)}
                            </div>
                            <button className='btn btn-danger' onClick={() => deleteItem(item)}>Eliminar</button>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}

export default Cart