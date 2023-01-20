import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (product, cantidad) => {
        console.log(`Agregaste ${product.title}, cantidad: ${cantidad}`);
        const newObject = {
            item: product,
            quantity: cantidad
        };
        setCartItems([...cartItems, newObject]);
    }

    const deleteItem = (id) => {
        const updatedCart = cartItems.filter(element => element.id !== id);
        setCartItems(updatedCart);
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const value = {
        cartItems,
        addToCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;